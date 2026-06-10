"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
} from "react"
import { AnimatePresence, motion } from "motion/react"

// Define the structure for our logo objects
interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// Utility function to randomly shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Utility function to distribute logos across multiple columns
const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  if (allLogos.length === 0) return Array.from({ length: columnCount }, () => [])

  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])

  // Distribute logos evenly across columns
  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })

  // Ensure all columns have the same number of logos by filling shorter columns
  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })

  return columns
}

// Props for the LogoColumn component
interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

// LogoColumn component: Displays a single column of animated logos
const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000 // Time each logo is displayed (in milliseconds)
    const columnDelay = index * 200 // Stagger the start of each column's animation

    // Safety check to prevent math errors on initial empty state
    if (!logos || logos.length === 0) return null

    // Calculate which logo should be displayed based on the current time
    const adjustedTime =
      (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)

    // Memoize the current logo to prevent unnecessary re-renders
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const CurrentLogo = useMemo(
      () => logos[currentIndex].img,
      [logos, currentIndex]
    )

    return (
      <motion.div
        className="w-24 h-14 md:w-48 md:h-24 overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <CurrentLogo className="w-20 h-20 md:w-32 md:h-32 max-w-[80%] max-h-[80%] object-contain" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

LogoColumn.displayName = "LogoColumn"

// Main LogoCarousel component
function LogoCarousel({ columnCount = 2 }: { columnCount?: number }) {
  const [currentTime, setCurrentTime] = useState(0)

  // Memoize the array of logos to prevent unnecessary re-renders
  const allLogos: Logo[] = useMemo(
    () => [
      { name: "Vercel", id: 1, img: VercelIcon },
      { name: "Nextjs", id: 2, img: NextjsIcon },
      { name: "Tailwind", id: 3, img: TailwindCSSIcon },
      { name: "Typescript", id: 4, img: TypeScriptIcon },
      { name: "Nodejs", id: 5, img: NodejsIcon },
      { name: "React", id: 6, img: ReactIcon },
      { name: "Laravel", id: 7, img: LaravelIcon },
      { name: "MongoDb", id: 8, img: MongodbIcon },
      { name: "AWS", id: 9, img: AwsIcon },

    ],
    []
  )

  // Calculate distributed logos during render to prevent cascading re-renders
  const logoSets = useMemo(() => {
    return distributeLogos(allLogos, columnCount)
  }, [allLogos, columnCount])

  // Function to update the current time (used for logo cycling)
  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  // Set up an interval to update the time every 100ms
  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  // Render the logo columns
  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

function VercelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 256 222"
      width="256"
      height="222"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path fill="#000" d="m128 0 128 221.705H0z" />
    </svg>
  )
}



const TypeScriptIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 256"
    width={256}
    height={256}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
      fill="#3178C6"
    />
    <path
      d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
      fill="#FFF"
    />
  </svg>
)



const TailwindCSSIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 54 33"
    {...props}
  >
    <g clipPath="url(#prefix__clip0)">
      <path
        fill="#38bdf8"
        fillRule="evenodd"
        d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="#fff" d="M0 0h54v32.4H0z" />
      </clipPath>
    </defs>
  </svg>
)

const NextjsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={180}
    height={180}
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_408_139"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={180}
      height={180}
    >
      <circle cx={90} cy={90} r={90} fill="black" />
    </mask>
    <g mask="url(#mask0_408_139)">
      <circle
        cx={90}
        cy={90}
        r={87}
        fill="black"
        stroke="white"
        strokeWidth={6}
      />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#paint0_linear_408_139)"
      />
      <rect
        x={115}
        y={54}
        width={12}
        height={72}
        fill="url(#paint1_linear_408_139)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_408_139"
        x1={109}
        y1={116.5}
        x2={144.5}
        y2={160.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_408_139"
        x1={121}
        y1={54}
        x2={120.799}
        y2={106.875}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
)

function NodejsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="256" height="260" {...props}>
      <path fill="#339933" d="M12 1L2 6.8v11.5L12 23l10-5.7V6.8L12 1zm-1 18.3l-6.5-3.8v-7l6.5 3.8v7zm1-9.2L5.5 6.3l6.5-3.7 6.5 3.7-6.5 3.8zm7 5.4l-6.5 3.8v-7l6.5-3.8v7z" />
    </svg>
  )
}


function ReactIcon() {
  return (
    <svg className="w-20 h-20 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182.018.175.067.365.095.545-2.127.819-3.466 2.071-3.466 3.5 0 1.429 1.339 2.681 3.466 3.5-.028.18-.077.37-.095.545-.218 2.058.272 3.543 1.379 4.182.376.213.803.322 1.235.316a5.987 5.987 0 0 0 3.514-1.56 5.992 5.992 0 0 0 3.515 1.56 2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182-.019-.175-.067-.365-.1-.545 2.132-.819 3.471-2.071 3.471-3.5Zm-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212-.012.106-.043.222-.058.33-.841-.243-1.7-.418-2.57-.523a16.165 16.165 0 0 0-1.747-1.972 4.9 4.9 0 0 1 2.731-1.234Zm-7.917 8.781c.172.34.335.68.529 1.017.194.337.395.656.6.969a14.09 14.09 0 0 1-1.607-.376 14.38 14.38 0 0 1 .478-1.61Zm-.479-4.076a14.085 14.085 0 0 1 1.607-.376c-.205.313-.405.634-.6.969-.195.335-.357.677-.529 1.017-.19-.527-.35-1.064-.478-1.61ZM8.3 12a19.32 19.32 0 0 1 .888-1.75c.33-.568.69-1.118 1.076-1.65.619-.061 1.27-.1 1.954-.1.684 0 1.333.035 1.952.1a19.63 19.63 0 0 1 1.079 1.654c.325.567.621 1.15.887 1.746a18.869 18.869 0 0 1-1.953 3.403 19.218 19.218 0 0 1-3.931 0 20.169 20.169 0 0 1-1.066-1.653A19.324 19.324 0 0 1 8.3 12Zm7.816 2.25c.2-.337.358-.677.53-1.017.191.527.35 1.065.478 1.611a14.48 14.48 0 0 1-1.607.376c.202-.314.404-.635.597-.97h.002Zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20.214 20.214 0 0 0-.6-.97c.542.095 1.078.22 1.606.376a14.111 14.111 0 0 1-.478 1.611h.002ZM12.217 6.34c.4.375.777.773 1.13 1.193-.37-.02-.746-.033-1.129-.033s-.76.013-1.131.033c.353-.42.73-.817 1.13-1.193Zm-4.249-1.7a1.5 1.5 0 0 1 .76-.187 4.9 4.9 0 0 1 2.729 1.233A16.253 16.253 0 0 0 9.71 7.658c-.87.105-1.728.28-2.569.524-.015-.109-.047-.225-.058-.331-.171-1.619.151-2.787.885-3.211ZM3.718 12c0-.9.974-1.83 2.645-2.506.218.857.504 1.695.856 2.506-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12Zm4.25 7.361c-.734-.423-1.056-1.593-.885-3.212.011-.106.043-.222.058-.331.84.243 1.697.418 2.564.524a16.37 16.37 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037Zm3.11-2.895c.374.021.753.034 1.14.034.387 0 .765-.013 1.139-.034a14.4 14.4 0 0 1-1.14 1.215 14.248 14.248 0 0 1-1.139-1.215Zm5.39 2.895c-.782.451-2.075.072-3.5-1.038a16.248 16.248 0 0 0 1.757-1.981 16.41 16.41 0 0 0 2.565-.523c.015.108.046.224.058.33.175 1.619-.148 2.789-.88 3.212Zm1.6-4.854A16.563 16.563 0 0 0 17.216 12c.352-.812.638-1.65.856-2.507 1.671.677 2.646 1.607 2.646 2.507 0 .9-.975 1.83-2.646 2.507h-.004Z" />
      <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794Z" />
    </svg>


  )
}
function LaravelIcon() {
  return (
    <svg className="w-20 h-20 text-red-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linejoin="round" d="m17 13 3.4641-2V7L17 5l-3.4641 2v4M17 13l-3.4641-2M17 13v4l-7.00001 4M17 13V9m0 4-7.00001 4m3.53591-6L10.5 12.7348M9.99999 21l-3.4641-2.1318M9.99999 21v-4m-3.4641 2v-.1318m0 0V15L10.5 12.7348m-3.96411 6.1334L3.5 17V5m0 0L7 3l3.5 2m-7 0 2.99999 2M10.5 5v7.7348M10.5 5 6.49999 7M17 9l3.5-2M17 9l-3.5-2M9.99999 17l-3.5-2m0 .5V7" />
    </svg>

  )
}
function MongodbIcon() {
  return (
    <svg className="w-20 h-20 text-green-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" fill-rule="evenodd" d="M7.29395 11.8039c0-3.96638 2.13959-6.41723 3.53335-8.01378.6733-.7712 1.1725-1.34306 1.1725-1.79012 0 .44706.4993 1.01892 1.1725 1.79013 1.3938 1.59654 3.5334 4.04739 3.5334 8.01377 0 4.3266-2.7501 6.9507-4.0764 7.7654L12.3701 22h-.7071l-.2906-2.4295c-1.3255-.8132-4.07845-3.4378-4.07845-7.7666Zm4.06395 6.7007.6419-9.44578.649 9.44578-.649.7503-.6419-.7503Z" clip-rule="evenodd" />
    </svg>

  )
}

function AwsIcon() {
  return (
    <svg className="w-20 h-20 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill="currentColor" d="M7.70858 10.176c-.0059.1918.02016.3833.07716.567.05635.1582.12675.3114.21041.4577.02989.0424.04691.0921.04909.1435-.00368.0394-.01708.0774-.03906.1107-.02198.0333-.05189.0609-.08718.0806l-.41382.2664c-.04921.0342-.10786.0533-.16833.0546-.03729-.0006-.07404-.0088-.10786-.0241-.03383-.0153-.06399-.0373-.08852-.0647-.09084-.0886-.17086-.1872-.23847-.2937-.06312-.1093-.12625-.2323-.19638-.3758-.23007.28-.52286.505-.85597.6577-.3331.1528-.69768.2293-1.0658.2236-.23782.0125-.47581-.0215-.69988-.1002-.22407-.0786-.42969-.2002-.60468-.3575-.16281-.1601-.28937-.3516-.37152-.5622s-.11806-.4357-.10542-.6607c-.0085-.2476.04-.49387.14195-.72084.10194-.22696.25475-.42883.44721-.59079.45708-.34704 1.02741-.5217 1.60615-.49187.23468-.00102.46912.01497.70137.04782.24549.03416.49097.08198.75048.13663V8.2153c.03746-.36552-.07329-.73083-.30861-1.0179-.30324-.22803-.68514-.33327-1.06609-.29376-.23624.00109-.47158.02859-.70138.08198-.23919.05528-.47367.12837-.70137.21861l-.23146.08198h-.09819c-.09819 0-.14027-.06832-.14027-.19812v-.31425c-.00622-.07522.00831-.15069.04208-.21861.05218-.0584.1168-.10503.18937-.13663.2626-.12306.53761-.21922.82061-.28693.33218-.08331.67398-.12464 1.01699-.12297.61832-.0525 1.23302.134 1.71136.5192.19644.21006.34589.45761.43886.72693.09297.26931.12744.55452.1012.83751L7.70858 10.176Zm-2.6512.9701c.23887.0003.47605-.039.70138-.1162.23999-.0798.45329-.2214.61721-.4099.10821-.114.18537-.2525.22444-.403.04532-.1811.06654-.36707.06312-.5534v-.28693c-.20607-.04171-.41451-.07136-.62422-.08881H5.4221c-.34289-.02679-.68477.06249-.9679.25277-.10942.08972-.19564.20325-.25168.33142-.05605.12815-.08036.26735-.07095.40635-.01155.1238.00371.2486.04479.3663.04108.1177.10706.2256.19367.3169.19501.1477.4422.214.68735.1845Zm5.25332.6831c-.0889.0081-.178-.0136-.2525-.0615-.07121-.069-.12-.1569-.14028-.2527l-1.529-4.91878c-.03108-.08355-.04997-.17094-.05611-.2596 0-.10247.04909-.15713.1543-.15713h.64527c.08889-.00805.17795.01364.25249.06149.06832.07011.11457.15783.13326.25277L10.6193 10.743l1.031-4.24242c.0108-.09596.0554-.1853.1263-.25277.0771-.04787.1684-.06949.2595-.06149h.526c.0933-.008.1868.01357.2665.06149.0658.07094.1096.15858.1263.25277l1.017 4.24242 1.1292-4.26292c.0187-.09493.0649-.18265.1332-.25277.0746-.04785.1636-.06953.2525-.06148h.6102c.0218-.00213.0437.00047.0643.00761.0205.00714.0392.01865.0547.03369.0154.01503.0272.03323.0345.05326.0074.02004.01.04141.0079.06257.0026.03411.0026.06836 0 .10247 0 0 0 .08881-.0421.15713l-1.5851 4.91874c-.0187.0949-.065.1826-.1333.2528-.0754.0459-.1638.0675-.2525.0614h-.5611c-.0922.0096-.1848-.0148-.2595-.0683-.0695-.0684-.1139-.1572-.1263-.2527l-1.0169-4.09899-1.01 4.09899c-.0124.0955-.0568.1843-.1263.2527-.0753.0524-.1674.0766-.2595.0683l-.5751.0137Zm8.4165.164c-.3399.0015-.6788-.0351-1.01-.1093-.2607-.051-.5131-.136-.7505-.2528-.0839-.039-.1545-.1006-.2034-.1776-.0272-.0579-.0415-.1208-.042-.1845v-.3211c0-.1298.0491-.1981.1473-.1981.0418-.0065.0844-.0065.1262 0l.1613.0683c.2248.0979.46.1712.7014.2186.2558.0543.5168.0818.7785.082.3323.0202.6634-.0534.9539-.2118.1055-.0624.1921-.1509.2512-.2565.0592-.1055.0886-.2244.0855-.3446.0033-.0818-.0106-.1633-.0407-.2397-.0302-.07633-.076-.14588-.1347-.20439-.1899-.16027-.4157-.27492-.6593-.33474l-.9468-.29376c-.4097-.1003-.7758-.32526-1.0451-.64217-.2118-.26596-.3277-.59251-.3296-.92909-.0039-.23873.0566-.47428.1753-.68316.1173-.2053.2774-.38447.4699-.52603.2109-.15082.4487-.26203.7014-.32792.2689-.07547.5478-.11229.8276-.1093.1448-.00996.2901-.00996.4349 0l.4278.06831.3717.10247.2736.10931c.0734.04221.1396.09522.1964.15713.0391.06392.0585.13741.0561.21178v.30058c0 .13664-.0491.20495-.1473.20495-.0891-.00994-.1751-.03786-.2525-.08198-.3981-.16851-.8285-.25236-1.2625-.24593-.3007-.01421-.6002.04695-.8697.17762-.1001.05934-.1817.14411-.236.24521-.0544.1011-.0795.21471-.0726.32864-.0003.08419.0169.16757.0507.24507.0337.07751.0833.14753.1457.20581.207.16139.4457.27994.7014.34842l.9258.28692c.3924.10142.7444.31568 1.01.61484.201.25675.3073.57207.3016.89491.0041.2554-.0535.5082-.1684.7378-.1126.22-.2758.4117-.4769.5602-.2081.163-.4461.2859-.7014.3621-.3061.0959-.6253.1465-.9468.1503l.021-.0068ZM1.95721 14.0043c.08851-.1117.25276-.1417.40291-.0501 2.956 1.6699 6.30435 2.5466 9.71118 2.5424 2.547-.0102 5.0667-.5176 7.4139-1.4927.2212-.0923.442-.0252.5504.1273.0544.0765.0784.1732.056.2731-.0223.0994-.088.1913-.1929.2664l-.0025.0018c-2.374 1.591-5.18 2.437-8.0499 2.4273-3.62804.0192-7.13297-1.2975-9.82873-3.6929.00006 0-.00007-.0001 0 0-.06599-.0585-.10575-.1289-.1154-.2033-.00962-.0742.01189-.1449.05504-.1993Z" />
      <path fill="currentColor" d="M21.9852 13.2357c-.0506-.0587-.1329-.1058-.2258-.1441-.0959-.0396-.2151-.0746-.3508-.1035-.2719-.0579-.6185-.093-.9967-.0876-.7541.0108-1.6508.183-2.3341.6748-.1118.0805-.1949.1945-.1751.3147.0225.1362.1551.1917.2864.1917l.0241-.003c.375-.0465.9652-.1198 1.5-.134.2706-.0072.5225.0009.7232.0339.1003.0164.1845.0386.2506.0663.0667.028.1084.0591.1318.0896l.001.0013c.0211.0266.0396.072.0489.1434.0092.0704.0085.1579-.0018.2604-.0204.2049-.0773.456-.1527.723-.1173.4156-.2758.8577-.4014 1.2081-.0355.0991-.0684.1909-.097.2727-.0253.0645-.0344.13-.0204.1901.0147.063.0538.1145.1113.143.1108.0549.2469.0095.3548-.0833.6431-.5509 1.0488-1.3947 1.2591-2.1349.1055-.3712.1632-.7208.1764-1.0006.0065-.1398.0021-.2647-.0141-.3675-.0155-.099-.0442-.1922-.0977-.2545Z" />
    </svg>

  )
}
export { LogoCarousel }
export default LogoCarousel