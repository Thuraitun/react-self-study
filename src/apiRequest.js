const apiRequset = async (url ='', opitionsObj= null, errMsg = null) => {

    try {

        const response = await fetch(url, opitionsObj);
        if(!response.ok) throw Error('Please reload the app');

    } catch (err) {

        errMsg = err.message;

    } finally {

        return errMsg;

    }
    
}

export default apiRequset;