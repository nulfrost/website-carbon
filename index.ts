import {
  WebsiteCarbonCalculator,
  WebsiteCarbonCalculatorError,
} from "website-carbon-calculator";

const p = "API-KEY-HERE";

async function run() {
  try {
    const websiteCarbonCalculator = new WebsiteCarbonCalculator({
      pagespeedApiKey: p,
    });
    const result = await websiteCarbonCalculator.calculateByURL(
      "https://yourwebsite.com/"
    );
    console.log(result);
  } catch (error) {
    if (error instanceof WebsiteCarbonCalculatorError) {
      console.warn(error.message);
    }
  }
}

run();
