export interface User {
    _id: string,
    name?: string,
    playerName?: string,
    length?: string,
    password?: string,
    pIN?: string,
    house?: string,
    lastJoinTime?: string,
    lastUpdateTime?: string,
    houseSafeTime?: string,
    sleepTime?: string,
    farmTicket?: string,
    money?: string,
    bankAccount?: string,
    depositMoney?: string,
    lastBankOp?: string,
    bankRobTime?: string,
    lastBankUpdate?: string,
    bankInterest?: string,
    lastBankCollect?: string,
    level?: string,
    experience?: string,
    kills?: string,
    deaths?: string,
    time?: string,
    lockTime?: string,
    lockReason?: string,
    arrest?: string,
    arrestReason?: string,
    police?: string,
    admin?: string,
    boneVit?: string,
    boneStr?: string,
    boneDef?: string,
    boneRap?: string,
    hook?: {
        hookDamage?: string,
        boostHook?: string,
        hookExplode?: string,
        jetpack?: string,
        spiderHook?: string,
        ghostHook?: string,
        infiniteHook?: string
    },
    hammer?: {
        lights?: string,
        poisonHammer?: string,
        superHammer?: string,
        invisibilityHammer?: string,
        heartHammer?: string,
        hammerExplode?: string,
        mineHammer?: string
    },
    gun?: {
        gunSpread?: string,
        gunExplode?: string,
        fastGun?: string,
        ghostGun?: string,
        clusterGun?: string,
        gunBounce?: string,
        splashGun?: string,
        followGun?: string
    },
    shotgun?: {
        moreSpread?: string,
        shotgunExplode?: string,
        fastShotgun?: string,
        ghostShotgun?: string,
        clusterShotgun?: string,
        shotgunBounce?: string,
        splashShotgun?: string,
        followShotgun?: string
    },
    grenade?: {
        grenadeSpread?: string,
        dragonGrenade?: string,
        fastGrenade?: string,
        ghostGrenade?: string,
        clusterGrenade?: string,
        grenadeBounce?: string,
        splashGrenade?: string,
        followGrenade?: string
    },
    laser?: {
        laserSpread?: string,
        laserExplode?: string,
        fastLaser?: string,
        freezeLaser?: string,
        swapLaser?: string,
        plasmaLaser?: string,
        laserDragger?: string,
        laserDropper?: string,
        jailLaser?: string,
        confuseLaser?: string
    },
    ninja?: {
        ninjaFly?: string,
        ninjaSpawn?: string,
        ninjaChange?: string,
        ninja4Ever?: string
    },
    special?: {
        infiniteAmmo?: string,
        regeneration?: string,
        'health++'?: string,
        'armor++'?: string,
        beginArmor?: string,
        weaponsSpawn?: string,
        antiPoison?: string,
        infiniteJump?: string
    },
    rank?: {
        vIP?: string,
        whitelist?: string,
        master?: string,
        masterPro?: string
    },
    group?: { terrorist?: string, medic?: string, engineer?: string },
    vehicle?: { speedJet?: string },
    hyper?: {
        halfDamage?: string,
        blackHole?: string,
        touchkill?: string,
        drone?: string,
        rocketDrone?: string,
        teemanipulator?: string,
        secondChance?: string,
        armorAura?: string,
        telekinesis?: string,
        mineLaser?: string,
        warps?: string,
        flamethrower?: string,
        protectAura?: string,
        pet?: string,
        stability?: string,
        concentration?: string,
        vampGun?: string,
        lightningLaser?: string,
        graviSpark?: string,
        lightsaber?: string,
        knife?: string,
        lightGun?: string,
        thunderGun?: string,
        superFLaser?: string,
        shield?: string,
        tronLight?: string,
        scream?: string
    },
    pet?: {
        nameTag?: string,
        skinTag?: string,
        fortuneCookies?: string,
        bookOfOblivion?: string,
        magicalMetal?: string,
        petFusion?: string
    }
}