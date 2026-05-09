class DisplayPicture{
    
    static displayFloorPicture(picturePath, floorName) {
        const content = document.getElementById('floorPictureContent');
        content.innerHTML = `
            <p>${floorName}</p>
            <img src="${picturePath}" alt="${floorName}" class="output-image"
                 onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%23ddd\' width=\'400\' height=\'300\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'sans-serif\' font-size=\'18\' fill=\'%23666\'%3EFloor Image Not Available%3C/text%3E%3C/svg%3E';">
        `;
    }
}

export { DisplayPicture }