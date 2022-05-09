import {
  WebsiteCarbonCalculator,
  WebsiteCarbonCalculatorError,
} from "website-carbon-calculator";

exports.handler = async (event: any) => {
  try {
    const websiteCarbonCalculator = new WebsiteCarbonCalculator({
      pagespeedApiKey: process.env.PAGESPEED_API_KEY as string,
    });
    const result = await websiteCarbonCalculator.calculateByURL(
      event.websiteName
    );

    const response = {
      statusCode: 200,
      body: JSON.stringify(result),
    };
    return response;
  } catch (error) {
    if (error instanceof WebsiteCarbonCalculatorError) {
      console.warn(error.message);
    }
  }
};
