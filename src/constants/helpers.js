export const getDragAndDropId = (list, dragId, dropId) => {
    return list.map((element) => {
        let currentId = element.id;
        if (element.id === dropId) {
            currentId = dragId;
        }
        if (element.id === dragId) {
            currentId = dropId;
        }
        return { ...element, id: currentId };
    });
};

export const checkIfDataInRange = (payloadDate, payloadTitle, prevDate, nextDate, searchValue) => {
    return (
        new Date(payloadDate) >= prevDate &&
        new Date(payloadDate) <= nextDate &&
        payloadTitle.toLowerCase().includes(searchValue.toLowerCase())
    );
};

export const checkIdDateNotInRange = (payloadDate, payloadTitle, prevDate, searchValue) => {
    return (
        new Date(payloadDate) >= prevDate &&
        payloadTitle.toLowerCase().includes(searchValue.toLowerCase())
    );
};
