import prisma from '@/lib/prisma';
import { auth, clerkClient } from '@clerk/nextjs/server'
import React from 'react'

export async function getOrganization(slug) {
    const { userId } = auth();

    if (!userId) {
        throw new Error("Unauthorized")
    }

    const user = await prisma.user.findUnique({
        where: {
            clerkUserId: userId
        }
    })
    if (!user) {
        throw new Error("User not found")
    }

    const organization = await clerkClient().organizations.getOrganization({
        slug
    })
    if (!organization) {
        return null
    }
    const { data: membership } = await clerkClient().organizations.getOrganizationMembershipList({
        organizationId: organization.id
    })

    const userMembership = membership.find((member) => member.publicUserData?.userId === userId)

    if (!userMembership) {
        return null
    }
    return organization
}

