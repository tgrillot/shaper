import Papa from 'papaparse';

class ParsedCSV {
    constructor(file) {
      this.file = file;
      this.data = null;
  
      this.reader = new FileReader();
      this.reader.onload = this.handleFileLoad.bind(this);
      this.reader.readAsText(this.file);
    }
  
    handleFileLoad(event) {
      const csvData = event.target.result;
      Papa.parse(csvData, {
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: this.handleParseComplete.bind(this),
      });
    }
    
    handleParseComplete(parsedData) {
      this.data = parsedData.data;
    }
  }

export default ParsedCSV;
