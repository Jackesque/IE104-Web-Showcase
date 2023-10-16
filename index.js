    // Adjust volume for page audio
    const pageAudio = document.getElementById("page_audio");
    pageAudio.volume = 0.1;
    
    // Add event listeners for keydown events
    document.addEventListener('click', (event)=> {
      pageAudio.play();
    })
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'm':
        pageAudio.muted = !pageAudio.muted;
        break;
        case ' ':
        case 'Spacebar':
        event.preventDefault(); // Prevent the spacebar from scrolling the page
        if (pageAudio.paused) {
          pageAudio.play();
        } else {
          pageAudio.pause();
        }
        break;
        default:
        break;
      }
    });
    
    // Then play
    pageAudio.play();
    
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
    