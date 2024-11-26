export const imageLoader = (images: string[]):Promise<void[]> => {
 return Promise.all(
    images.map((path) => {
        return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = path
            img.onload = () => resolve();
            img.onerror = (err) => reject(err)
        })
    })
 )
}

export const videoLoader = (videoList: string[]):Promise<void[]> => {
    return Promise.all(
        videoList.map((path) => {
            new Promise<void>((resolve, reject) => {
                const video = document.createElement("video")
                video.src = path
                video.oncanplaythrough = () => resolve()
                video.onerror = (err) => reject(err)
            })
        })
    )
}