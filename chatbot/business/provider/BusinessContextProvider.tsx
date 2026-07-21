"use client";

import React, { createContext, useEffect, useState, ReactNode } from "react";
import { BusinessStatus } from "../constants/business.constants";
import { BusinessContextState, Company, Service, FAQ } from "../types/business.types";
import { businessCache } from "../cache/business.cache";
import { fetchCompany } from "../services/company.service";
import { fetchServices } from "../services/services.service";
import { fetchFaqs } from "../services/faqs.service";

export const BusinessContext = createContext<BusinessContextState | undefined>(undefined);

export const BusinessContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<BusinessStatus>(BusinessStatus.IDLE);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // High-level generic slices exposed to the UI (derived from cache eventually)
  const [company, setCompany] = useState<Company | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);

  const initializeContext = async () => {
    setStatus(BusinessStatus.INITIALIZING);
    try {
      // Parallel, Non-Blocking Business Fetch
      const results = await Promise.allSettled([
        fetchCompany(),
        fetchServices(),
        fetchFaqs()
      ]);
      
      const companyResult = results[0];
      const servicesResult = results[1];
      const faqsResult = results[2];
      
      let allSuccess = true;
      let allFailed = true;

      // Handle Company
      if (companyResult.status === "fulfilled") {
        const companyData = companyResult.value;
        businessCache.set("company", companyData);
        setCompany(companyData);
        allFailed = false;
      } else {
        console.error("Company API Failed", companyResult.reason);
        setErrors((prev) => ({ ...prev, company: companyResult.reason?.message || "Failed to load company" }));
        allSuccess = false;
      }

      // Handle Services
      if (servicesResult.status === "fulfilled") {
        const servicesData = servicesResult.value;
        businessCache.set("services", servicesData);
        setServices(servicesData);
        allFailed = false;
      } else {
        console.error("Services API Failed", servicesResult.reason);
        setErrors((prev) => ({ ...prev, services: servicesResult.reason?.message || "Failed to load services" }));
        allSuccess = false;
      }

      // Handle FAQs
      if (faqsResult.status === "fulfilled") {
        const faqsData = faqsResult.value;
        businessCache.set("faqs", faqsData);
        setFaqs(faqsData);
        allFailed = false;
      } else {
        console.error("FAQs API Failed", faqsResult.reason);
        setErrors((prev) => ({ ...prev, faqs: faqsResult.reason?.message || "Failed to load faqs" }));
        allSuccess = false;
      }

      // Business Status Evaluation
      if (allSuccess) {
        setStatus(BusinessStatus.READY);
      } else if (allFailed) {
        setStatus(BusinessStatus.ERROR);
      } else {
        setStatus(BusinessStatus.PARTIAL_READY);
      }
      
    } catch (err: unknown) {
      console.error("Business Context Initialization Unexpected Error", err);
      setStatus(BusinessStatus.ERROR);
      const errorMessage = err instanceof Error ? err.message : "Unexpected failure";
      setErrors((prev) => ({ ...prev, global: errorMessage }));
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    initializeContext();
  }, []);

  return (
    <BusinessContext.Provider
      value={{
        company,
        services,
        faqs,
        loading: status === BusinessStatus.INITIALIZING,
        status,
        errors,
        isInitialized: status === BusinessStatus.READY || status === BusinessStatus.PARTIAL_READY,
        initializeContext
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};
