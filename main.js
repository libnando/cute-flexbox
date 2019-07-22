const CuteFlexboxApp = (() => {
    
    const _loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const _yeah = () => {
        let sections = document.getElementsByTagName("section");

        for(let i=0; i<sections.length; i++){

            let moreContent = document.createTextNode(" "+_loremIpsum);
            let sectionCurrent = sections[i];
            sectionCurrent.appendChild(moreContent);

        }

    };

    return {
        Init: () =>{
            _yeah();
        }
    }

})();

CuteFlexboxApp.Init();