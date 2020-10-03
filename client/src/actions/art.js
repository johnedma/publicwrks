// export const getArtByArtist = artist => console.log(`${This dont do shit}`);
export const LOAD_ART = 'LOAD_ART'


const loadArt = art => ({
    type: LOAD_ART,
    art,
});
export const SET_ARTIST = "SET_ARTIST"


export const getArt = () => {
    return async dispatch => {
        // try {
        const res = await fetch(`/api/art/`, { method: "GET" })
        console.log(res)
        if (res.ok) {
            //     throw res
            // }
            const art = await res.json()

            dispatch(loadArt(art))

        }
        // catch { console.error(); }
    }
}
// export const getMugArt = (id) => {
//     return async dispatch => {
//         // try {
//         const res = await fetch(`/api/art/${id}`, { method: "GET" })
//         console.log(res)
//         if (res.ok) {
//             //     throw res
//             // }
//             const art = await res.json()

//             // dispatch(loadMugArt(art))

//         }
//         // catch { console.error(); }
//     }
// }
// export const getPhoneArt = (id) => {
//     return async dispatch => {
//         // try {
//         const res = await fetch(`/api/art/${id}`, { method: "GET" })
//         console.log(res)
//         if (res.ok) {
//             //     throw res
//             // }
//             const art = await res.json()

//             dispatch(loadPhoneArt(art))

//         }
//         // catch { console.error(); }
//     }
// }
// export const getArt = () => {
//     return async dispatch => {
//         // try {
//         const res = await fetch('http://localhost:5000/api/art', { method: "GET" })
//         console.log(res)
//         if (res.ok) {
//             //     throw res
//             // }
//             const art = await res.json()

//             dispatch(loadArt(art))

//         }
//         // catch { console.error(); }
//     }
// }
        // export const login = (email, password) => {
        //     return async dispatch => {
        //         const response = await fetch(`api/session`, {
        //             method: 'put',
        //             headers: { 'Content-Type': 'application/json' },
        //             body: JSON.stringify({ email, password }),
        //         });

        //         if (response.ok) {
        //             const data = await response.json();
        //             dispatch(setUser(data));
        //         }
        //     };
        // };

    // export const getPokemon = () => async (dispatch, getState) => {
    //     const { authentication: { token } } = getState();
    //     const response = await fetch(`${ baseUrl } /pokemon`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });

    //     if (response.ok) {
    //       const list = await response.json();
    //       dispatch(load(list));
    //     }
    //   };

    //   export const getPokemonTypes = () => async (dispatch, getState) => {
    //     const { authentication: { token } } = getState();
    //     const response = await fetch(`${baseUrl}/pokemon/types`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });

    //     if (response.ok) {
    //       const list = await response.json();
    //       dispatch(loadTypes(list));
    //     }
    //   };
