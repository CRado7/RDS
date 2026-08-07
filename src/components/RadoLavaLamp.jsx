import React from "react";
import "../styles/RadoLavaLamp.css";

const RadoLavaLamp = () => (
  <div className="lava-wrap">
    <svg
      className="lava-svg"
      viewBox="0 0 1000 280"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Generous filter region so blobs never clip during animation */}
        <filter id="lava-goo" x="-100%" y="-200%" width="300%" height="500%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="11" result="blur" />
          <feColorMatrix
            in="blur" mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
            result="goo"
          />
        </filter>

        {/* Clip everything to the RADO letterforms */}
        <clipPath id="lava-radoClip">
          <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle" className="lava-text-shape">
            RADO
          </text>
        </clipPath>

        <linearGradient id="lava-blobA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E8FF3A" />
          <stop offset="100%" stopColor="#9FE000" />
        </linearGradient>
        <linearGradient id="lava-blobB" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F0EDEA" />
          <stop offset="100%" stopColor="#C9C4BC" />
        </linearGradient>
        <linearGradient id="lava-blobC" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8FF3A" />
          <stop offset="100%" stopColor="#F0EDEA" />
        </linearGradient>
      </defs>

      <g clipPath="url(#lava-radoClip)">
        <rect x="0" y="0" width="1000" height="280" fill="#0A0A0A" />
        <g filter="url(#lava-goo)" className="lava-blob-field">
          {/* Row 1 — upper */}
          <circle className="blob lava-row1" cx="100" cy="100" r="68" fill="url(#lava-blobA)" />
          <circle className="blob lava-row1" cx="240" cy="105" r="62" fill="url(#lava-blobB)" />
          <circle className="blob lava-row1" cx="380" cy="100" r="70" fill="url(#lava-blobC)" />
          <circle className="blob lava-row1" cx="520" cy="105" r="64" fill="url(#lava-blobA)" />
          <circle className="blob lava-row1" cx="660" cy="100" r="68" fill="url(#lava-blobB)" />
          <circle className="blob lava-row1" cx="800" cy="105" r="62" fill="url(#lava-blobC)" />
          {/* Row 2 — lower, offset for full letter coverage */}
          <circle className="blob lava-row2" cx="170" cy="195" r="66" fill="url(#lava-blobB)" />
          <circle className="blob lava-row2" cx="310" cy="190" r="70" fill="url(#lava-blobC)" />
          <circle className="blob lava-row2" cx="450" cy="195" r="64" fill="url(#lava-blobA)" />
          <circle className="blob lava-row2" cx="590" cy="190" r="68" fill="url(#lava-blobB)" />
          <circle className="blob lava-row2" cx="730" cy="195" r="66" fill="url(#lava-blobC)" />
          <circle className="blob lava-row2" cx="860" cy="190" r="60" fill="url(#lava-blobA)" />
        </g>
      </g>

      {/* Dark outline on top keeps letterforms crisp */}
      <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle" className="lava-text-outline">
        RADO
      </text>
    </svg>
  </div>
);

export default RadoLavaLamp;
