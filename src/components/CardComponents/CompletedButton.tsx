import React from 'react';

interface CompletedButtonProps {
  isCompleted: boolean;
  handleClick(event: any): void;
  fillColor: string;
}

function CompletedButton(props: CompletedButtonProps) {
  return (
    <div>
      {props.isCompleted ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={props.handleClick}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5 15C11.6421 15 15 11.6421 15 7.5C15 3.35786 11.6421 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15ZM10.3195 5.27964C10.4945 5.1252 10.7616 5.14186 10.916 5.31685C11.0705 5.49185 11.0538 5.75891 10.8788 5.91335L6.24838 10L5.68909 9.36629L10.3195 5.27964ZM6.32244 8.80712L5.68873 9.36641L4.74351 8.29542C4.58907 8.12043 4.60573 7.85336 4.78073 7.69892C4.95572 7.54448 5.22278 7.56114 5.37723 7.73613L6.32244 8.80712Z"
            fill={props.fillColor}
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={props.handleClick}
        >
          <circle
            cx="7.5"
            cy="7.5"
            r="6.75"
            fill="white"
            stroke="#020202"
            stroke-width="1.5"
          />
        </svg>
      )}
    </div>
  );
}

export default CompletedButton;
