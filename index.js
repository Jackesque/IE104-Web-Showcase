    // Adjust volume for page audio
    const pageAudio = document.getElementById("page_audio");
    pageAudio.volume = 0.1;
    
    // Listen for keyboard events
    document.addEventListener('click', () => pageAudio.play());
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      switch (key) {
        case 'm':
        pageAudio.muted = !pageAudio.muted;
        break;
        case ' ':
        case 'Spacebar':
        case 'p':
        event.preventDefault(); // Prevent the spacebar from scrolling the page
        if (pageAudio.paused) {
          pageAudio.play();
        } else {
          pageAudio.pause();
        }
        break;
        default:
          if (/^\d$/.test(key)) {
            // Convert the key to a number and set the audio volume accordingly
            // 1-9 maps to 10%-90% and 0 maps to 100%
            const numKey = parseInt(key);
            pageAudio.muted = false;
            let volume = numKey / 10;
            if (numKey === 0) volume = 1;
            pageAudio.volume = volume;
            break;
          }
          break;
        }
    });
    
    // Then play
    pageAudio.muted = !pageAudio.muted;

    // Change theme based on current hour in a day
    const currentHour = new Date().getHours();
    if (document.body) {
      if (currentHour < 12) {
        document.body.style = "background-image: url(./images/backgrounds/madman1.png);";
      }
      else {
        const bodyEle = document.body;
        bodyEle.style = "background-image: url(./images/backgrounds/madman2.png);";
        
        const h1Ele = bodyEle.getElementsByTagName("h1")[0];
        h1Ele.style = "background: rgba(255, 255, 255, 0.2); border-radius: 0.125rem;";
        
        const tableEle = document.getElementsByTagName("table")[0];
        tableEle.style = "border-spacing: 6px; border-collapse: separate;";
        
        const captionEle = tableEle.querySelectorAll("caption")[0];
        captionEle.style.margin = "0.375rem";
        
        const allElementsInTable = tableEle.querySelectorAll("caption, th, td");
        for (const ele of allElementsInTable) {
          ele.style.background = "rgba(255, 255, 255, 0.2)";
          ele.style.border = 0;
          ele.style.borderRadius = "0.125rem";
        }
      }
    }
    