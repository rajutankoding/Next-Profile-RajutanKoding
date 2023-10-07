"use client";
import Image from "next/image";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const CardComponents = () => {
  return (
    <div className="card w-96 glass">
      <figure>
        {/* <Image width={50} height={50} alt="Rajutann Koding" src="/" /> */}
        <AiOutlineAppstoreAdd size={50} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Company Profile</h2>
        <p>Creative Company Profile</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Learn now!</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponents;
