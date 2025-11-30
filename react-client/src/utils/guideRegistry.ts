import type { GuideMetadata } from '../types/GuideMetadata';

// docs/WebDev
import * as WebDevOverview from '../docs/WebDev/GetStarted/Overview';
import * as WebDevComparison from '../docs/WebDev/GetStarted/Comparison';
import * as React from '../docs/WebDev/Frameworks/React';
import * as Vue from '../docs/WebDev/Frameworks/Vue';
import * as Angular from '../docs/WebDev/Frameworks/Angular';
import * as Tailwind from '../docs/WebDev/Tools/Tailwind';
import * as Vite from '../docs/WebDev/Tools/Vite';
import * as Recharts from '../docs/WebDev/Tools/Recharts';
import * as Shadcn from '../docs/WebDev/Tools/Shadcn';

// docs/Mobile
import * as MobileOverview from '../docs/Mobile/GetStarted/Overview';
import * as MobileComparison from '../docs/Mobile/GetStarted/Comparison';
import * as ReactNative from '../docs/Mobile/Frameworks/ReactNative';
import * as Flutter from '../docs/Mobile/Frameworks/Flutter';
import * as Expo from '../docs/Mobile/Frameworks/Expo';
import * as Kotlin from '../docs/Mobile/Native/Kotlin';
import * as Swift from '../docs/Mobile/Native/Swift';
import * as AndroidStudio from '../docs/Mobile/Tools/AndroidStudio';
import * as Xcode from '../docs/Mobile/Tools/Xcode';

// docs/Desktop
import * as DesktopOverview from '../docs/Desktop/GetStarted/Overview';
import * as DesktopComparison from '../docs/Desktop/GetStarted/Comparison';
import * as Electron from '../docs/Desktop/Frameworks/Electron';
import * as Tauri from '../docs/Desktop/Frameworks/Tauri';
import * as MacOS from '../docs/Desktop/Native/MacOS';
import * as DotNet from '../docs/Desktop/Microsoft/DotNet';
import * as ASPNET from '../docs/Desktop/Microsoft/ASPNET';
import * as VisualStudio from '../docs/Desktop/Tools/VisualStudio';

// docs/Welcome
import * as WelcomeOverview from '../docs/Welcome/GetStarted/Overview';
import * as HowToUse from '../docs/Welcome/GetStarted/HowToUse';
import * as WelcomeWebDev from '../docs/Welcome/Devices/WebDev';
import * as WelcomeMobile from '../docs/Welcome/Devices/Mobile';
import * as WelcomeDesktop from '../docs/Welcome/Devices/Desktop';
import * as Cloud from '../docs/Welcome/AppLogic/Cloud';
import * as Backend from '../docs/Welcome/AppLogic/Backend';
import * as Deployment from '../docs/Welcome/AppLogic/Deployment';
import * as DataAnalytics from '../docs/Welcome/AppLogic/DataAnalytics';
import * as APIFinder from '../docs/Welcome/CodeAtlasTools/APIFinder';
import * as PlanningAgent from '../docs/Welcome/CodeAtlasTools/PlanningAgent';
import * as CommonTemplates from '../docs/Welcome/AdditionalResources/CommonTemplates';
import * as SiteXml from '../docs/Welcome/AdditionalResources/SiteXml';

const guideModules = [
    // WebDev docs
    WebDevOverview,
    WebDevComparison,
    React,
    Vue,
    Angular,
    Tailwind,
    Vite,
    Recharts,
    Shadcn,
    // Mobile docs
    MobileOverview,
    MobileComparison,
    ReactNative,
    Flutter,
    Expo,
    Kotlin,
    Swift,
    AndroidStudio,
    Xcode,
    // Desktop docs
    DesktopOverview,
    DesktopComparison,
    Electron,
    Tauri,
    MacOS,
    DotNet,
    ASPNET,
    VisualStudio,
    // Welcome docs
    WelcomeOverview,
    HowToUse,
    WelcomeWebDev,
    WelcomeMobile,
    WelcomeDesktop,
    Cloud,
    Backend,
    Deployment,
    DataAnalytics,
    APIFinder,
    PlanningAgent,
    CommonTemplates,
    SiteXml
];

export const guideRegistry: GuideMetadata[] = guideModules
    .filter(module => 'metadata' in module && module.metadata !== undefined)
    .map(module => (module as any).metadata as GuideMetadata);

export function getGuideById(id: string): GuideMetadata | undefined {
    return guideRegistry.find(guide => guide.id === id);
}

export function getGuideByPath(path: string): GuideMetadata | undefined {
    return guideRegistry.find(guide => guide.path === path);
}
