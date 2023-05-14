import throttle from 'lodash.throttle'

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('timeupdate', throttle(onListen, 1000));

    function onListen(evt) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(evt));
    }

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
        const saveTime = localStorage.getItem("videoplayer-current-time");
        const parseTime = JSON.parse(saveTime);
        // console.log("parseTime", parseTime);
        // console.log("parseTime.seconds", parseTime.seconds);

        if (parseTime.seconds) {
            const timeSecond = parseTime.seconds;
            
            player.setCurrentTime(timeSecond).catch(function(error) {
                switch (error.name) {
                    case 'RangeError':
                    console.log('The time was less than 0 or greater than the videos duration');
                    break;
    
                    default:
                    console.log('Error');
                    break;
                }
            });
        }
    });
