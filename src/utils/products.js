const productos = [
    //Rifles
    {
        id: 1,
        title: "AK47 NightWish/Deseo Nocturno",
        description: "El sueño del ataque de un venado, da mucho miedo, porque es señal de que tendrás que prepararte para algún problema en tu vida real. Coleccion Dreams And Nightmares",
        stock: 5,
        type: "Rifles",
        imageProduct: {
            firtsImage: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_nightwish_light_large.0c4581be094e2bd732bec18ebdad2f71b1018af2.png",
            secondImage: "https://csgostash.com/storage/img/skin_sideview/s1515.png?id=25861a9e3b42b03909a06a1f50dfe4b3"
        },
        price: 501000,
    },

    {
        id: 2,
        title: "AUG Akihabara Accept",
        description: "Se ha decorado con un vinilo termotransferible de la portada de una revista de anime. Coleccion Rising Sun",
        stock: 2,
        type: "Rifles",
        imageProduct: {
            firtsImage: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_anime_aug_light_large.f049075c645871ee67b0b47253f59c26143efc49.png",
            secondImage: "https://csgostash.com/storage/img/skin_sideview/s629.png?id=1bf25b72b5963e0fe942c1c8bd777ece"
        },
        price: 293000,
    },

    {
        id: 3,
        title: "M4A1 S Hyperbeast",
        description: "Ha sido pintado a medida con una criatura bestial en colores psicodélicos.",
        stock: 14,
        type: "Rifles",
        imageProduct: {
            firtsImage: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1_hyper_beast_light_large.31850937661935a062d5f6faf5a1f02fdb90b861.png",
            secondImage: "https://csgostash.com/storage/img/skin_sideview/s554.png?id=9ad73873030cddcc7ca66196a326da2f"
        },
        price: 210000,
    },

    //Pistolas
    {
        id: 4,
        title: "USP Mezcla Mounstrosa",
        description: "Se aplicó un trabajo de pintura personalizado con un monstruo verde y otros íconos inspirados en el arte urbano popular. El silenciador tiene un acabado nacarado X__X.",
        stock: 32,
        type: "Pistolas",
        imageProduct: {
            firtsImage: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_krokos_light_large.ef94a997db4a990e55bc44d4b07b25f0f420e59e.png",
            secondImage: "https://csgostash.com/storage/img/skin_sideview/s1300.png?id=a28abb471e115c09de3ecd7ca1b71035"
        },
        price: 9000,      
    },

    {
        id: 5,
        title: "Glock 18 Vogue",
        description: "Un par de ojos adornan la diapositiva de esta Glock inspirada en el arte pop pintada a medida.",
        stock: 17,
        type: "Pistolas",
        imageProduct: {
            firtsImage: "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_eyecontact_light_large.fb7988d1d3d9ff159f81d3c0d9a2eacb976e2842.png",
            secondImage: "https://csgostash.com/storage/img/skin_sideview/s1282.png?id=c0b5cef410d07fc2517be98e4a97083b"
        },
        price: 5000,      
    },

    //SMG
    {
        id: 6,
        title: "MAC 10 Piloto de Neon",
        description: "Ha sido pintado a medida con la imagen de un motociclista mortal.",
        stock: 6,
        type: "SMG",
        imageProduct: {
            firtsImage: "https://csgostash.com/storage/img/skin_sideview/s553.png?id=e48d27915b2aef0ab596fada4d7525a7",
            secondImage: "https://csgostash.com/storage/img/skin_sideview/s553.png?id=e48d27915b2aef0ab596fada4d7525a7"
        },
        price: 4300,      
    },

    {
        id: 7,
        title: "MP9 Lirio Salvaje",
        description: "Se ha pintado a mano un trabajo de pintura personalizado de un lirio azul sobre una base violeta.",
        stock: 1,
        type: "SMG",
        imageProduct: {
            firtsImage: "https://csgostash.com/storage/img/skin_sideview/s1144.png?id=2c659aa1320ff8829e729005202e2a28"
        },
        price: 640000,      
    },

    //Cuchillos
    {
        id: 8,
        title: "Cuchillo Mariposa Ultravioleta",
        description: "Tiene piezas individuales pintadas con aerosol en colores sólidos en una combinación de colores negro y morado.. ",
        stock: 1,
        type: "Cuchillos",
        imageProduct: {
            firtsImage: "https://csgostash.com/storage/img/skin_sideview/s861.png?id=5a7d92b2d2c7508828cf5458b17ba5e1",
            secondImage: "https://csgostash.com/storage/img/skin_sideview/s861.png?id=5a7d92b2d2c7508828cf5458b17ba5e1"
        },
        price: 310000,      
    },

    {
        id: 9,
        title: "Karambit Diente de tigre",
        description: "Ha sido anodizado en naranja y grabado a mano con un patrón de rayas de tigre..",
        stock: 3,
        type: "Cuchillos",
        imageProduct: {
            firtsImage: "https://csgostash.com/storage/img/skin_sideview/s550.png?id=42dff5922826012d0f87ec9e73732bbd",
            secondImage: "https://csgostash.com/storage/img/skin_sideview/s550.png?id=42dff5922826012d0f87ec9e73732bbd"
        },
        price: 459000,      
    },

    {
        id: 10,
        title: "M9 Bayonet FreeHand",
        description:"Se ha pintado de negro y morado, y luego se ha decorado con rotulador metálico.",
        stock: 1,
        type: "Cuchillos",
        imageProduct: {
            firtsImage: "https://csgostash.com/storage/img/skin_sideview/s798.png?id=10ff0b2ce912c2d4154d6ee71fab5b10",
            secondImage: "https://csgostash.com/storage/img/skin_sideview/s798.png?id=10ff0b2ce912c2d4154d6ee71fab5b10"
        },
        price: 300000,      
    },
]

export default productos;