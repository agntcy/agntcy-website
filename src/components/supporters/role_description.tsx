"use client";
import Table from "../reusables/table";

const RoleDescription = () => {
  const headers = ["Role", "Responsibilities", "Requirements", "Defined_by"];
  const supporterRequirements = "Your company name in the AGNTCY supporter list on AGNTCY.org \n\n Participate in co-marketing opportunities and events as able";
  const data = [
    { Role: "Supporter", Responsibilities: "Add your company’s name and voice to the effort", Requirements: supporterRequirements, Defined_by: "Support AGNTCY publically because you share our belief in an open, interoperable Internet of Agents" },
    { Role: "Adopter", Responsibilities: "For those using AGNTCY in their organization", Requirements: "Your company name in the AGNTCY adopter list on GitHub", Defined_by: "Support AGNTCY through use of our affiliated projects" },
    { Role: "Contributor", Responsibilities: "Active contributor in the community, reviewer of PRs", Requirements: "Evidence of multiple contributions to AGNTCY projects", Defined_by: "Be an active member of our GitHub organization" },
    { Role: "Maintainer", Responsibilities: "Code review and approvals, help set project direction and priorities", Requirements: "Highly experienced active contributor, author, and reviewer of a project", Defined_by: "Act as CODEOWNERS in GitHub, GitHub Team" },
  ];

  return (
    <div className="mx-auto sm:mx-0 2xl:mx-0 container mb-36 w-full py-2 md:py-2 lg:py-2 lg:mb-36">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-left py-2">
          <Table headers={headers} data={data} />
        </div>
      </div>
    </div>
  );
};  

export default RoleDescription;
