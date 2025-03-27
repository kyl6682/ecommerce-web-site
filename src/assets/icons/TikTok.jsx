export const TikTok = ({ color = 'whilte', size = '16px' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox=' 0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.5503 3.358C11.8909 2.59144 11.5455 1.60104 11.573 0.592723L9.10919 0.533203C9.10919 0.533203 9.10919 0.638323 9.10919 0.780083V10.6602C9.14359 13.786 4.20503 13.7102 4.59575 10.2551C4.83463 8.88136 6.31079 8.03592 7.62247 8.51384V5.99992C4.76679 5.50264 2.06055 7.7756 2.08903 10.6713C2.33863 16.9513 11.346 16.9521 11.5959 10.6713C11.533 10.4465 11.5682 6.26152 11.5593 5.90856C12.6796 6.60568 13.9831 6.95416 15.3033 6.90952V4.3132C14.0828 4.3132 13.1514 3.98872 12.5503 3.358Z'
        fill={color}
      />
    </svg>
  )
}
