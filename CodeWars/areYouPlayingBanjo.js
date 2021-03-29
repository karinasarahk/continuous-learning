function areYouPlayingBanjo(name) {
    if (name[0] == "r" && name[name.length-1] == "r") {
        return console.log('Plays banjo');
    } else {
        return console.log('Does not play banjo');
    }   
}

areYouPlayingBanjo("rasul");
areYouPlayingBanjo("rarar");
areYouPlayingBanjo("rojulior");
areYouPlayingBanjo("sarah");
