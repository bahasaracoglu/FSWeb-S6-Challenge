import React, { useState } from "react";

export default function Accordeon(props) {
  const [closed, setClosed] = useState(true);
  const { children, title } = props;
  const toggle = () => setClosed(!closed);

  return (
    <div className="accordeon">
      <div className="accordeon__title" onClick={() => toggle()}>
        {title}
      </div>
      {!closed && <div className="accordeon__detail">{children}</div>}
    </div>
  );
}
