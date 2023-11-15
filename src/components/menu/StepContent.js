import React from "react";

export const StepContent = ({ step, sub }) => {
  return (
    <div className="text-center">
      <div className="tastyMenu__hotpot_step line-bottom-title">
        <p className="my-3">{step}</p>
        <div className="tastyMenu__hotpot__caption my-3">
          <p>{sub}</p>
        </div>
      </div>
    </div>
  );
};
