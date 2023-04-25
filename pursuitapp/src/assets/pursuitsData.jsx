const pursuitsData = [
    // Add the vacation data here as objects
    {
        title: "Deep Sea Diving",
        imgSrc: "https://i.imgur.com/iOg7n5W.png",
        location: "Riviera Beach, Florida",
        description: "Explore the fascinating underwater world on a deep sea diving adventure in Riviera Beach, Florida. Our experienced instructors will guide you to the best dive spots where you can see colorful coral reefs, exotic fish and even shipwrecks.",
        instructorName: "John I.",
        instructorRating: "4.7",
        instructorImgSrc: "https://i.imgur.com/UeFpMQf.png",
        price: 219,
        activity: "scubaDiving",
        rating: "https://i.imgur.com/f83xIAs.png",
    },
    {
        title: "Cronulla Fishing Charters",
        imgSrc: "https://i.imgur.com/TzrUgjY.png",
        location: "Sydney, Australia",
        description: "Experience the thrill of catching your own dinner on a Cronulla fishing charter in Sydney, Australia. Our expert guides will take you to the best fishing spots where you can catch a variety of fish such as snapper, kingfish and flathead.",
        instructorName: "Jeff I.",
        instructorRating: "4.9",
        instructorImgSrc: "https://i.imgur.com/TYYyNXn.png",
        price: 179,
        activity: "fishing",
        rating: "https://i.imgur.com/dZt9fkj.png",
    },
    {
        title: "Tony's Trophy Elk Hunts",
        imgSrc: "https://i.imgur.com/gfLHXaI.png",
        location: "Baudette, Minnesota",
        description: "Fulfill your hunting dreams on a trophy elk hunt with Tony in Baudette, Minnesota. You will be taken to prime hunting locations where you can hunt trophy elk, white-tailed deer and black bears.",
        instructorName: "Tony K.",
        instructorRating: "4.3",
        instructorImgSrc: "https://i.imgur.com/2bQOmfB.png",
        price: 349,
        activity: "hunting",
        rating: "https://i.imgur.com/tToc9DM.png",
    },
    {
        title: "Mummy Mountain Llama Trek",
        imgSrc: "https://i.imgur.com/gvZEECg.png",
        location: "Estes Park, Colorado",
        description: "Take a llama trek through the stunning wilderness of Estes Park, Colorado. Our experienced guides will lead you through the rugged terrain of Mummy Mountain, where you can enjoy panoramic views of the Rockies. ",
        instructorName: "Jane S.",
        instructorRating: "4.8",
        instructorImgSrc: "https://i.imgur.com/nBTOfX4.png",
        price: 349,
        activity: "hiking",
        rating: "https://i.imgur.com/f83xIAs.png",
    },
    {
        title: "Kayak Adventure on Lake Tahoe",
        imgSrc: "https://i.imgur.com/ryJgSTB.jpeg",
        location: "Lake Tahoe, California",
        description: "Paddle along the crystal-clear waters of Lake Tahoe and take in the stunning mountain views. Our experienced guides will show you the hidden coves and beaches that are only accessible by kayak.",
        instructorName: "Sarah T.",
        instructorRating: "4.9",
        instructorImgSrc: "https://i.imgur.com/XXMYnMl.png",
        price: 129,
        activity: "other",
        rating: "https://i.imgur.com/dZt9fkj.png",
    },
    {
        title: "Rock Climbing Adventure",
        imgSrc: "https://i.imgur.com/Yl8mhE8.jpeg",
        location: "Joshua Tree National Park, California",
        description: "Explore the vertical world and push your limits on the stunning rock formations of Joshua Tree National Park. Our experienced guides will teach you the basics of climbing and belaying, and help you climb routes suited to your abilities.",
        instructorName: "Mike S.",
        instructorRating: "4.7",
        instructorImgSrc: "https://i.imgur.com/Gt4zyx4.png",
        price: 199,
        activity: "other",
        rating: "https://i.imgur.com/SCt4Cxn.png",
    },
    {
        title: "Sunset Horseback Ride",
        imgSrc: "https://i.imgur.com/NAjYRIA.png",
        location: "Sedona, Arizona",
        description: "Experience the magic of the Sonoran desert on a sunset horseback ride. Our gentle horses and experienced wranglers will take you through the red rocks and mesas of Sedona, as the sun sets over the horizon.",
        instructorName: "Mark D.",
        instructorRating: "4.8",
        instructorImgSrc: "https://i.imgur.com/vKbQcJo.png",
        price: 149,
        activity: "other",
        rating: "https://i.imgur.com/SCt4Cxn.png",
    },
    {
        title: "Whitewater Rafting Adventure",
        imgSrc: "https://i.imgur.com/jbbyjEg.png",
        location: "Moab, Utah",
        description: "Experience the thrill of the rapids on a whitewater rafting adventure in the heart of Moab. Our experienced guides will take you down the Colorado River, through stunning canyons and towering rock formations.",
        instructorName: "Tom M.",
        instructorRating: "4.9",
        instructorImgSrc: "https://i.imgur.com/TYYyNXn.png",
        price: 249,
        activity: "other",
        rating: "https://i.imgur.com/tToc9DM.png",
    },
    {
        title: "Grand Canyon Hiking Adventure",
        imgSrc: "https://i.imgur.com/ym44MgU.jpeg",
        location: "Grand Canyon National Park, Arizona",
        description: "Embark on an unforgettable hiking adventure in the breathtaking Grand Canyon National Park. Our experienced guides will take you on a journey through the ancient rocks and stunning vistas of one of the seven natural wonders of the world.",
        instructorName: "Karen L.",
        instructorRating: "4.9",
        instructorImgSrc: "https://i.imgur.com/nBTOfX4.png",
        price: 249,
        activity: "hiking",
        rating: "https://i.imgur.com/SCt4Cxn.png",
    },
    {
        title: "Scuba Diving in the Florida Keys",
        imgSrc: "https://i.imgur.com/9TlOkkp.jpg",
        location: "Florida Keys, Florida",
        description: "Explore the colorful and diverse underwater world of the Florida Keys on a scuba diving adventure. Our expert instructors will guide you through crystal clear waters and vibrant coral reefs, home to an array of marine life.",
        instructorName: "Alex B.",
        instructorRating: "4.8",
        instructorImgSrc: "https://i.imgur.com/7Nz5Giu.png",
        price: 299,
        activity: "scuba diving",
        rating: "https://i.imgur.com/4q3Hd9X.png",
    },
    {
        title: "Hunting Expedition in Alaska",
        imgSrc: "https://i.imgur.com/KjpzySE.png",
        location: "Denali National Park, Alaska",
        description: "Experience the thrill of hunting in the vast and rugged wilderness of Denali National Park. Our experienced guides will lead you on a hunt for big game such as moose, caribou, and grizzly bears, in a stunning and pristine landscape.",
        instructorName: "Jack S.",
        instructorRating: "4.7",
        instructorImgSrc: "https://i.imgur.com/TkF5vGU.png",
        price: 799,
        activity: "hunting",
        rating: "https://i.imgur.com/SCt4Cxn.pngg",
    },
    {
        title: "Fly Fishing in the Colorado Rockies",
        imgSrc: "https://i.imgur.com/fmpB6gh.png",
        location: "Rocky Mountain National Park, Colorado",
        description: "Immerse yourself in the serenity and beauty of the Colorado Rockies while fly fishing in the pristine waters of Rocky Mountain National Park. Our expert guides will lead you to the best spots for catching trout, and teach you the art of fly fishing.",
        instructorName: "Emma R.",
        instructorRating: "4.8",
        instructorImgSrc: "https://i.imgur.com/u1sAW3I.png",
        price: 399,
        activity: "fishing",
        rating: "https://i.imgur.com/f83xIAs.png",
    },
    {
        title: "Mount Rainier Summit Hike",
        imgSrc: "https://i.imgur.com/D9KB7x3.jpeg",
        location: "Mount Rainier National Park, Washington",
        description: "Climb to the top of the majestic Mount Rainier on a challenging but rewarding summit hike. Our experienced guides will lead you through glaciers, rocky ridges, and alpine meadows, for breathtaking views of the surrounding landscape.",
        instructorName: "Max G.",
        instructorRating: "4.9",
        instructorImgSrc: "https://i.imgur.com/bfUT0U2.png",
        price: 599,
        activity: "hiking",
        rating: "https://i.imgur.com/dZt9fkj.png",
    }

];

export default pursuitsData;

