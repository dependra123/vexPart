const saveToJson = (data) => {
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


};

export default saveToJson;