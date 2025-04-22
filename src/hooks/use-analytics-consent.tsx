import { CookieValue } from "vanilla-cookieconsent";
import useConsentStore from "~/store/consent-store";
export function useAnalyticsConsent(cookie: CookieValue) {
    const setCategories = useConsentStore((state) => state.setCategories)

    setCategories(cookie.categories);
//   if (!cookie.categories.includes("analytics")) {
//     // Disable Segment analytics
//     if (window.analytics) {
//       window.analytics.reset();
//     }
//     console.log("Segment analytics disabled");
//   } else {
//     console.log('test4')
//   }
}
