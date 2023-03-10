import Iframe from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/desk";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = ( S,{ schemaType }) => {
    if(schemaType==='post'){
        return S.document().views([
            S.view.form(),
            S.view.component(Iframe).options({
                url:`https://blog.adithyan.tech/api/preview`,
                defaultSize:'desktop',
                reload:{
                    button:true
                },
                attributes:{},
            }).title("Preview"),
        ]);
    }
};
