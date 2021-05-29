

export const apiCallMiddleware = store => next => action => {
    return new Promise(async function (resolve, reject) {
        if (action.params && action.params.disableAPICall) {
            await next({
                type: action.type,
                payload: action.payload,
            });
            resolve();
        } else {
            try {
                if (!action.type) {
                    throw new Error("Please add Valid action type")
                }
                const newHeaders = {
                    ...action.meta.config.headers,
                };

                const newConfig = {
                    ...action,
                    meta: {
                        ...action.meta,
                        config: {
                            ...action.meta.config,
                            headers: newHeaders,
                        }
                    }
                }
                const response = await fetch(action.meta.url, newConfig.meta.config)
                if (response.ok) {
                    if (action.payload) {
                        next({
                            type: action.type,
                            payload: action.payload
                        });
                        resolve();
                    }
                    else {
                        if (action.params && action.params.noResponse) {
                            resolve();
                        } else {
                            try {
                                const result = await response.json();
                                next({
                                    type: action.type,
                                    payload: result
                                });
                                resolve(result);
                            } finally {
                                resolve();
                            }
                        }
                    }

                } else {
                    switch (response.status) {
                        case 404: {
                            const result = await response.json();
                            reject(result);
                            break;
                        }
                        default:
                            const result = await response.json();
                            reject(result);
                            return false;
                    }
                }
            }
            catch (error) {
                console.log(error)
                reject();
            }
        }
    });
}