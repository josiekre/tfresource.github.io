(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{358:function(e,a,t){"use strict";t.r(a);var o=t(0),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"objective"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[e._v("#")]),e._v(" Objective")]),e._v(" "),t("p",[e._v("The objective of smoothing is to reveal the underlying trend in a time series so that the time series can be more clearly related to explanatory variables.")]),e._v(" "),t("h2",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),t("p",[e._v("Smoothing is used to stabilize a time series containing considerable variations, but smoothing is used in traffic forecast principally for removing cyclical variations prior to any estimation process. For example, smoothing can be used to eliminate seasonal variations in traffic due to vacations, school sessions, holiday shopping and other effects tied to the time of year. One set of results from smoothing are “seasonal adjustment factors” that can be used to relate smoothed or yearly forecasts to individual time periods (such as months). The preferred method of smoothing of traffic data is central moving average.")]),e._v(" "),t("h2",{attrs:{id:"guidelines"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guidelines"}},[e._v("#")]),e._v(" Guidelines")]),e._v(" "),t("p",[e._v("Smoothing can be helpful when developing a linear trend model or a linear model with explanatory variables.\nCentral moving average takes the average of traffic counts for exactly one complete cycle with ½ cycle before a particular period and ½ cycle after that period, including the period itself. For example, if the moving average of traffic is being calculated for May of 2005, then the average should be taken over the twelve months between November of 2004 and October of 2005. The smoothed data series will terminate about ½ cycle ahead of the unsmoothed data series.")]),e._v(" "),t("p",[e._v("Smoothing is done prior to the statistical analysis step. When dealing with cycles of an even number of periods, the averaging range should be selected such that the last complete smoothed data point is as near to recent as possible.\nThe statistical analysis of the smoothed data is carried out in the same way as unsmoothed data, using linear regression. See "),t("a",{attrs:{href:"Trend_models_in_project_level_traffic_forecasting"}},[e._v("Trend models")]),e._v(" and "),t("a",{attrs:{href:"Linear_models_with_explanatory_variables_in_project_level_traffic_forecasting"}},[e._v("Linear models with explanatory variables")]),e._v(".")]),e._v(" "),t("p",[e._v("A seasonal adjustment factor for a period is average of the ratios of the unsmoothed data series to the smoothed data series. A traffic forecast for a specific time period in the future may be obtained by applying that period’s seasonal adjustment factor to a forecast of the smoothed traffic.")]),e._v(" "),t("h2",{attrs:{id:"advice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advice"}},[e._v("#")]),e._v(" Advice")]),e._v(" "),t("p",[e._v("A series of monthly average traffic counts can be statistically stronger than a series of annual traffic counts, given that there are more data points. However, explanatory variables should be available monthly or nearly so for a monthly traffic forecast. Some interpolation to obtain monthly data is acceptable.")]),e._v(" "),t("p",[e._v("Central moving average may be used to smooth any cyclical data series, such a traffic counts across a day or across a week.")]),e._v(" "),t("p",[e._v("Other simple smoothing techniques from the literature, such as “exponential smoothing”, have not been shown to be advantageous for analysis of traffic counts.")]),e._v(" "),t("p",[e._v("Explanatory variables exhibiting cyclical variations should also be smoothed. In such cases, a smoothed forecasted value for the explanatory variable should be used in any forecast.")]),e._v(" "),t("h2",{attrs:{id:"items-to-report"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items-to-report"}},[e._v("#")]),e._v(" Items to Report")]),e._v(" "),t("ul",[t("li",[e._v("Seasonal adjustment factors")])]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("p",[e._v("NCHRP Report 765.")])])}),[],!1,null,null,null);a.default=s.exports}}]);