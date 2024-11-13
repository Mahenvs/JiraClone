import { getOrganization } from "@/actions/organization";
import React from "react";

const Organization = async ({ params }: { params: any }) => {
  console.log(params.orgId);
  const { orgId } = params;
  const organization = await getOrganization(orgId);
  if (!organization) {
    return <div>Organization not found</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start">
        <h1 className="text-5xl font-bold gradient-text pb-2">
          {organization.name}&rsquo;s Projects
        </h1>
      </div>
      <div className="mb-4  ">Show Org projects</div>
      <div>Show User assigned and reported issues here</div>
    </div>
  );
  // const data = await
  return <div>{orgId}</div>;
};

export default Organization;
