import * as React from "react";
import { SVGProps, memo } from "react";
import { motion } from "framer-motion";

type Props = {
  delay?: number;
};

const SvgComponent = ({ className, delay }: SVGProps<SVGSVGElement> & Props) => {
  const strokeLength = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1.1,
    },
  };

  const fill1 = {
    hidden: {
      opacity: 0,
      fill: "rgba(180, 109, 177, 0)",
    },
    visible: {
      opacity: 1,
      fill: "rgba(180, 109, 177, 1)",
    },
  };

  const fill2 = {
    hidden: {
      opacity: 0,
      fill: "rgba(156, 92, 188, 0)",
    },
    visible: {
      opacity: 1,
      fill: "rgba(156, 92, 188, 1)",
    },
  };

  const fill3 = {
    hidden: {
      opacity: 0,
      fill: "rgba(131, 77, 201, 0)",
    },
    visible: {
      opacity: 1,
      fill: "rgba(131, 77, 201, 1)",
    },
  };

  const fill4 = {
    hidden: {
      opacity: 0,
      fill: "rgba(105, 58, 212, 0)",
    },
    visible: {
      opacity: 1,
      fill: "rgba(105, 58, 212, 1)",
    },
  };

  const fill5 = {
    hidden: {
      opacity: 0,
      fill: "rgba(180, 109, 177, 0)",
    },
    visible: {
      opacity: 1,
      fill: "rgba(180, 109, 177, 1)",
    },
  };

  const fill6 = {
    hidden: {
      opacity: 0,
      fill: "rgba(156, 92, 188, 0)",
    },
    visible: {
      opacity: 1,
      fill: "rgba(156, 92, 188, 1)",
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 134 57"
      className={className} /* {...props} */
    >
      <g clipPath="url(#a)">
        <g strokeWidth={2}>
          <motion.path
            stroke="#D8B5D7"
            variants={strokeLength}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            d="M30.383 11.082c0-.554-.2-1.086-.555-1.478a1.809 1.809 0 0 0-1.34-.612H9.486c-.502 0-.984.22-1.339.612a2.205 2.205 0 0 0-.555 1.478v.077c0 .555.2 1.086.555 1.478.355.392.837.613 1.34.613h19.002c.502 0 .984-.22 1.339-.613.355-.392.555-.923.555-1.478v-.077Z"
          />
          <motion.path
            stroke="#CCACDC"
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            variants={strokeLength}
            d="M51.813 11.941c0-.778-.28-1.525-.78-2.075-.498-.55-1.175-.86-1.88-.86-.706 0-1.382.31-1.88.86a3.096 3.096 0 0 0-.78 2.075c0 .386.07.768.203 1.124.133.356.33.68.576.952.247.272.54.489.863.636.323.148.669.224 1.018.224.35 0 .695-.076 1.018-.224a2.66 2.66 0 0 0 .862-.636 2.97 2.97 0 0 0 .577-.952 3.2 3.2 0 0 0 .203-1.124Z"
          />
          <motion.path
            stroke="#C0A5E3"
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            variants={strokeLength}
            d="M74.764 11.117c0-.278-.05-.554-.146-.812a2.152 2.152 0 0 0-.417-.688 1.923 1.923 0 0 0-.624-.46 1.767 1.767 0 0 0-.736-.162h-.052c-.253 0-.503.055-.736.161a1.923 1.923 0 0 0-.624.46c-.179.198-.32.432-.417.69a2.314 2.314 0 0 0-.147.811v31.991c0 .279.05.555.147.813.097.257.238.491.417.688.178.197.39.353.624.46.233.107.483.162.736.162h.052c.253 0 .503-.055.736-.162.234-.107.446-.263.624-.46.179-.197.32-.431.417-.689.097-.257.147-.533.147-.812v-31.99Z"
          />
          <motion.path
            stroke="#B39BE8"
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            variants={strokeLength}
            d="M114.422 41.956a.046.046 0 0 1 .023-.012.039.039 0 0 1 .025.005c.008.004.015.01.019.018a.051.051 0 0 1 .007.028c.002.835-.064 1.659.397 2.36 1.149 1.753 3.505.789 3.505-1.332.001-10.455.001-20.91-.001-31.365 0-.6-.041-1.026-.124-1.28-.602-1.839-3.004-1.818-3.628-.027-.096.276-.144.748-.144 1.418a4114.23 4114.23 0 0 0-.002 9.293.078.078 0 0 1-.011.04.066.066 0 0 1-.029.026.063.063 0 0 1-.038.006.066.066 0 0 1-.034-.019c-7.775-7.954-19.797-2.55-20.965 8.796-.754 7.335 3.589 14.148 10.118 15.577 2.89.632 5.833.12 8.389-1.501.844-.535 1.698-1.3 2.493-2.031Z"
          />
          <motion.path
            stroke="#D8B5D7"
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            variants={strokeLength}
            d="M20.924 19.727c0-.276-.05-.548-.145-.802a2.122 2.122 0 0 0-.411-.68 1.897 1.897 0 0 0-.616-.454 1.745 1.745 0 0 0-.726-.16h-.068c-.249 0-.496.055-.726.16-.23.105-.44.26-.616.454a2.124 2.124 0 0 0-.412.68 2.285 2.285 0 0 0-.144.802V43.13c0 .275.049.547.144.802.096.254.236.485.412.68a1.9 1.9 0 0 0 .616.453c.23.106.477.16.726.16h.068c.503 0 .986-.22 1.342-.614a2.21 2.21 0 0 0 .556-1.481V19.727Z"
          />
          <motion.path
            stroke="#CCACDC"
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            variants={strokeLength}
            d="M51.098 20.478c0-.272-.049-.541-.143-.792a2.096 2.096 0 0 0-.407-.672 1.874 1.874 0 0 0-.608-.45 1.725 1.725 0 0 0-.719-.157h-.067c-.246 0-.49.054-.718.158a1.875 1.875 0 0 0-.609.449c-.174.192-.312.42-.406.672-.095.25-.143.52-.143.792v22.677c0 .55.197 1.076.55 1.464.351.389.829.607 1.326.607h.067c.498 0 .975-.218 1.327-.607.352-.388.55-.915.55-1.464V20.478Z"
          />
          <motion.path
            stroke="#B39BE8"
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            variants={strokeLength}
            d="M105.876 41.44c2.288-.005 4.481-1.051 6.096-2.909 1.615-1.858 2.52-4.375 2.516-6.998-.005-2.623-.917-5.137-2.538-6.989-1.621-1.851-3.817-2.89-6.106-2.885-2.288.005-4.481 1.05-6.096 2.909-1.615 1.858-2.52 4.375-2.516 6.998.005 2.623.918 5.137 2.538 6.988 1.621 1.852 3.818 2.89 6.106 2.886Z"
          />
        </g>
        <motion.path
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          variants={fill1}
          d="M28.488 8.992H9.486c-1.046 0-1.894.936-1.894 2.09v.077c0 1.155.848 2.09 1.894 2.09h19.002c1.047 0 1.895-.935 1.895-2.09v-.077c0-1.154-.848-2.09-1.895-2.09Z"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          variants={fill2}
          d="M49.153 14.877c1.469 0 2.66-1.315 2.66-2.936 0-1.62-1.191-2.935-2.66-2.935-1.47 0-2.66 1.314-2.66 2.935s1.19 2.936 2.66 2.936Z"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          variants={fill3}
          d="M72.841 8.995h-.052c-1.063 0-1.924.95-1.924 2.123v31.99c0 1.173.862 2.123 1.924 2.123h.052c1.062 0 1.924-.95 1.924-2.123v-31.99c0-1.173-.862-2.123-1.924-2.123Z"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          variants={fill4}
          d="M114.422 41.956c-.795.73-1.649 1.497-2.493 2.03-2.556 1.623-5.499 2.135-8.389 1.502-6.53-1.429-10.872-8.242-10.118-15.577 1.168-11.346 13.19-16.75 20.965-8.796.01.01.021.016.034.019.013.002.026 0 .038-.005a.067.067 0 0 0 .029-.027.078.078 0 0 0 .011-.04c-.003-3.09-.002-6.188.002-9.293 0-.67.048-1.142.144-1.418.624-1.79 3.026-1.811 3.628.028.083.253.124.68.124 1.28.002 10.455.002 20.91.001 31.364 0 2.12-2.356 3.085-3.505 1.332-.461-.701-.395-1.525-.397-2.36a.05.05 0 0 0-.007-.027.042.042 0 0 0-.019-.019.04.04 0 0 0-.025-.004.046.046 0 0 0-.023.011Zm-8.546-.517c2.288-.004 4.481-1.05 6.096-2.908 1.615-1.858 2.52-4.375 2.516-6.998-.005-2.623-.917-5.137-2.538-6.989-1.621-1.851-3.817-2.89-6.106-2.885-2.288.005-4.481 1.05-6.096 2.909-1.615 1.858-2.52 4.375-2.516 6.998.005 2.623.918 5.137 2.538 6.988 1.621 1.852 3.817 2.89 6.106 2.886Z"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          variants={fill5}
          d="M19.025 17.631h-.067c-1.048 0-1.898.939-1.898 2.096V43.13c0 1.157.85 2.095 1.898 2.095h.067c1.049 0 1.899-.938 1.899-2.095V19.727c0-1.157-.85-2.096-1.899-2.096Z"
        />
        <motion.path
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
          variants={fill6}
          d="M49.221 18.407h-.067c-1.036 0-1.876.927-1.876 2.071v22.677c0 1.144.84 2.071 1.876 2.071h.067c1.037 0 1.877-.927 1.877-2.071V20.478c0-1.144-.84-2.07-1.877-2.07Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="none" d="M0 .5h134v56H0z" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};
const Logo = memo(SvgComponent);
export default Logo;
