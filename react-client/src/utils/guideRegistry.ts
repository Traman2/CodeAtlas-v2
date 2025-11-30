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

// docs/Cloud
import * as CloudOverview from '../docs/Cloud/GetStarted/Overview';
import * as CloudComparison from '../docs/Cloud/GetStarted/Comparison';
import * as AWS from '../docs/Cloud/Providers/AWS';
import * as Azure from '../docs/Cloud/Providers/Azure';
import * as GCP from '../docs/Cloud/Providers/GCP';
import * as Terraform from '../docs/Cloud/Frameworks/Terraform';
import * as Kubernetes from '../docs/Cloud/Frameworks/Kubernetes';

// docs/Backend
import * as BackendOverview from '../docs/Backend/GetStarted/Overview';
import * as BackendComparison from '../docs/Backend/GetStarted/Comparison';
import * as Express from '../docs/Backend/Frameworks/Express';
import * as FastAPI from '../docs/Backend/Frameworks/FastAPI';
import * as Django from '../docs/Backend/Frameworks/Django';
import * as Flask from '../docs/Backend/Frameworks/Flask';
import * as SpringBoot from '../docs/Backend/Frameworks/SpringBoot';

// docs/Deployment
import * as DeploymentOverview from '../docs/Deployment/GetStarted/Overview';
import * as Vercel from '../docs/Deployment/Platforms/Vercel';
import * as Docker from '../docs/Deployment/Tools/Docker';
import * as GitHubActions from '../docs/Deployment/CI-CD/GitHubActions';

// docs/DataAnalytics
import * as DataAnalyticsOverview from '../docs/DataAnalytics/GetStarted/Overview';
import * as PyTorch from '../docs/DataAnalytics/Frameworks/PyTorch';
import * as SciKitLearn from '../docs/DataAnalytics/Frameworks/SciKitLearn';
import * as Pandas from '../docs/DataAnalytics/Libraries/Pandas';
import * as NumPy from '../docs/DataAnalytics/Libraries/NumPy';
import * as Matplotlib from '../docs/DataAnalytics/Libraries/Matplotlib';

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
    // Cloud docs
    CloudOverview,
    CloudComparison,
    AWS,
    Azure,
    GCP,
    Terraform,
    Kubernetes,
    // Backend docs
    BackendOverview,
    BackendComparison,
    Express,
    FastAPI,
    Django,
    Flask,
    SpringBoot,
    // Deployment docs
    DeploymentOverview,
    Vercel,
    Docker,
    GitHubActions,
    // DataAnalytics docs
    DataAnalyticsOverview,
    PyTorch,
    SciKitLearn,
    Pandas,
    NumPy,
    Matplotlib,
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
