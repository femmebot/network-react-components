import React from 'react'

const MobileMenuToggle = (props: any) => (
  <div onClick={props.onClick}>
    <svg
      width="29px"
      height="22px"
      viewBox="0 0 29 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="icons8-menu"
          transform="translate(-8.000000, -11.000000)"
          fill={props.color === 'light' ? '#FFFFFF' : '#000000'}
          fillRule="nonzero"
        >
          <path
            d={
              'M8,13 L8,13 C8,14.1045695 8.8954305,15 10,15 L35,15 C36.1045695,15 37,14.1045695 37,13 ' +
              'L37,13 C37,11.8954305 36.1045695,11 35,11 L10,11 C8.8954305,11 8,11.8954305 8,13 Z M8,22 L8,22 ' +
              'C8,23.1045695 8.8954305,24 10,24 L35,24 C36.1045695,24 37,23.1045695 37,22 L37,22 C37,20.8954305 ' +
              '36.1045695,20 35,20 L10,20 C8.8954305,20 8,20.8954305 8,22 Z M8,31 L8,31 C8,32.1045695 8.8954305,33 ' +
              '10,33 L35,33 C36.1045695,33 37,32.1045695 37,31 L37,31 C37,29.8954305 36.1045695,29 35,29 L10,29 ' +
              'C8.8954305,29 8,29.8954305 8,31 Z'
            }
            id="Shape"
          />
        </g>
      </g>
    </svg>
  </div>
)

export default MobileMenuToggle
