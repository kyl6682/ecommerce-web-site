const Other = ({ color = "black", size = 48 }) => {
  return (
    <svg
    width={size}
    height={size}
    viewBox=' 0 0 48 48'
    fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g 
        clipPath='url(#clip0_201_83361)'
        transform="translate(0, 20)"
      >
        <path
          d='M43.2047 10.4712C45.9057 10.4712 48.0922 8.26647 48.0922 5.51056C48.0922 2.75466 45.9057 0.523682 43.2047 0.523682C40.5039 0.523682 38.3174 2.75466 38.3174 5.51056C38.3174 8.26647 40.5039 10.4712 43.2047 10.4712Z'
          fill={color}
          fillOpacity='0.85'
        />
        <path
          d='M24.0923 10.4712C26.7933 10.4712 28.9539 8.26647 28.9539 5.51056C28.9539 2.75466 26.7933 0.523682 24.0923 0.523682C21.3913 0.523682 19.2048 2.75466 19.2048 5.51056C19.2048 8.26647 21.3913 10.4712 24.0923 10.4712Z'
          fill={color}
          fillOpacity='0.85'
        />
        <path
          d='M4.97974 10.4712C7.6807 10.4712 9.84148 8.26647 9.84148 5.51056C9.84148 2.75466 7.6807 0.523682 4.97974 0.523682C2.27878 0.523682 0.0922852 2.75466 0.0922852 5.51056C0.0922852 8.26647 2.27878 10.4712 4.97974 10.4712Z'
          fill={color}
          fillOpacity='0.85'
        />
      </g>
      <defs>
        <clipPath id='clip0_201_83361'>
          <rect
            width={size}
            height={size}
            fill='white'
            transform='translate(0.0922852 0.523682)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Other
