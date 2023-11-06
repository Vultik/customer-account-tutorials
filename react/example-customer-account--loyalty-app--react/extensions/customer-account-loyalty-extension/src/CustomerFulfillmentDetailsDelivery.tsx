import {
Card,
BlockStack,
reactExtension,
Button,
useApi,
TextBlock,
Divider,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
"customer-account.order-status.fulfillment-details.render-after",
( ) => <CustomerFulfillmentDetailsDelivery />
);

function CustomerFulfillmentDetailsDelivery( ) {
  const {i18n} = useApi<"customer-account.order-status.fulfillment-details.render-after">()
  return (
      <BlockStack>
        <Divider/>
        <TextBlock>
          {i18n.translate("fulfillmentDelivery.content")}
        </TextBlock>
        <BlockStack maxInlineSize={150}>
          <Button appearance="monochrome" kind="secondary" >
          {i18n.translate("fulfillmentDelivery.writeAReview")}
          </Button>
        </BlockStack>
     </BlockStack>
  );
}