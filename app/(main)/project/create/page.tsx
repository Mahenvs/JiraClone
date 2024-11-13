"use client";
import OrgSwitcher from "@/components/org-switcher";
import { OrganizationSwitcher, useOrganization, useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

const CreateProject = () => {
  const { isLoaded: isOrgLoaded, membership } = useOrganization();
  const { isLoaded: isUserLoaded } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (isOrgLoaded && isUserLoaded && membership) {
      setIsAdmin(membership.role === "org:admin");
    }
  }, [isOrgLoaded, isUserLoaded, membership]);

  if (!isOrgLoaded || !isUserLoaded) {
    return null;
  }
  if (isAdmin) {
    <OrgSwitcher />;
    return <span>Only Admins can create projects</span>;
  }
  return <div>CreateProject</div>;
};

export default CreateProject;
