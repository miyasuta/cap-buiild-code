const cds = require('@sap/cds')

module.exports = class CatalogService extends cds.ApplicationService {
    async init() {

        this.after('READ', 'Books', async (request) => {
            console.log("READ handler called");
        });

        return super.init();
    }
}