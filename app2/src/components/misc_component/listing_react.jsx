import React from "react";

export default function Listing_react() {

 var array1 = [
    { name: "Education & Prevention", val: 90 },
    { name: "Fundraising", val: 75 },
    { name: "Culture & Community", val: 87 },
    { name: "Welfare Activities", val: 79 },
	{ name: "Support Families", val: 85},
]



	return (
		<div>
			<div className="row custom-misc-2-con-chart">
				<div className="col-5">
					<h1>WHERE THE <br /> MONEY GOES</h1>
					<h5>current oprations and program <br /> spending breakdown</h5>
					<ul style={{ color: "#ff6302" }}>
						{["Education and Prevention", "Fundraising", "Culture and Community", "Welfare Activities", "Support Families"].map((data)=><li>{data}</li>)}
					</ul>

					<button
						className="btn btn-primary"
						style={{ backgroundColor: "#ff6302", borderRadius: "30px" }}
					>
						DONATE NOW
					</button>
				</div>
				<div className="col-7">
					<div className="heignt-creator">

						{array1.map((data) => {
							return (
								<div className="con-chart">
									<div className="bar-chart" style={{ height: `${data.val}%` }}>
										<div>{data.val}%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}