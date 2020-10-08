// export const getArtByArtist = artist => console.log(`${This dont do shit}`);
export const LOAD_ART = 'LOAD_ART'

const loadArt = art => ({
    type: LOAD_ART,
    art,
});

export const SET_ARTIST = "SET_ARTIST"


export const getArt = () => {
    return async dispatch => {
        const res = await fetch(`/api/art/`, { method: "GET" })
        // console.log(res)
        if (res.ok) {
            const art = await res.json()

            dispatch(loadArt(art))

        }
    }
}
