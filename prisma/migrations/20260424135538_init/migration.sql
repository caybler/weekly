-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `passwordHash` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Business` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Location` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `businessId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,

    UNIQUE INDEX `Location_businessId_name_key`(`businessId`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JobRole` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `businessId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `JobRole_businessId_name_key`(`businessId`, `name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BusinessMember` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NULL,
    `businessId` INTEGER NOT NULL,
    `staffId` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `accessLevel` ENUM('ADMIN', 'MANAGER', 'EMPLOYEE') NOT NULL DEFAULT 'EMPLOYEE',
    `status` ENUM('INVITED', 'PENDING', 'ACTIVE', 'DISABLED') NOT NULL DEFAULT 'INVITED',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `BusinessMember_businessId_staffId_key`(`businessId`, `staffId`),
    UNIQUE INDEX `BusinessMember_businessId_email_key`(`businessId`, `email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MemberJobRole` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `memberId` INTEGER NOT NULL,
    `roleId` INTEGER NOT NULL,

    UNIQUE INDEX `MemberJobRole_memberId_roleId_key`(`memberId`, `roleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MemberLocation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `memberId` INTEGER NOT NULL,
    `locationId` INTEGER NOT NULL,

    UNIQUE INDEX `MemberLocation_memberId_locationId_key`(`memberId`, `locationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeManager` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employeeId` INTEGER NOT NULL,
    `managerId` INTEGER NOT NULL,

    UNIQUE INDEX `EmployeeManager_employeeId_managerId_key`(`employeeId`, `managerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Invite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `businessId` INTEGER NOT NULL,
    `memberId` INTEGER NULL,
    `staffId` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `inviteCode` VARCHAR(191) NOT NULL,
    `status` ENUM('PENDING', 'ACCEPTED', 'EXPIRED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `expiresAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Invite_inviteCode_key`(`inviteCode`),
    UNIQUE INDEX `Invite_businessId_staffId_key`(`businessId`, `staffId`),
    UNIQUE INDEX `Invite_businessId_email_key`(`businessId`, `email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Location` ADD CONSTRAINT `Location_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JobRole` ADD CONSTRAINT `JobRole_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BusinessMember` ADD CONSTRAINT `BusinessMember_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BusinessMember` ADD CONSTRAINT `BusinessMember_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemberJobRole` ADD CONSTRAINT `MemberJobRole_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `BusinessMember`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemberJobRole` ADD CONSTRAINT `MemberJobRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `JobRole`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemberLocation` ADD CONSTRAINT `MemberLocation_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `BusinessMember`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MemberLocation` ADD CONSTRAINT `MemberLocation_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeManager` ADD CONSTRAINT `EmployeeManager_employeeId_fkey` FOREIGN KEY (`employeeId`) REFERENCES `BusinessMember`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeeManager` ADD CONSTRAINT `EmployeeManager_managerId_fkey` FOREIGN KEY (`managerId`) REFERENCES `BusinessMember`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invite` ADD CONSTRAINT `Invite_businessId_fkey` FOREIGN KEY (`businessId`) REFERENCES `Business`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
