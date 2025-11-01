import type { GuideMetadata } from '../types/GuideMetadata';

// Dynamic imports for all guides

// AllDocs/Welcome
import * as Overview from '../docs/Welcome/GetStarted/Overview';
import * as HowToUse from '../docs/Welcome/GetStarted/HowToUse';
import * as ComponentSummary from '../docs/Welcome/GetStarted/ComponentSummary';
import * as WebDev from '../docs/Welcome/Devices/WebDev';
import * as Mobile from '../docs/Welcome/Devices/Mobile';
import * as Desktop from '../docs/Welcome/Devices/Desktop';
import * as Cloud from '../docs/Welcome/AppLogic/Cloud';
import * as Backend from '../docs/Welcome/AppLogic/Backend';
import * as Deployment from '../docs/Welcome/AppLogic/Deployment';
import * as DataAnalytics from '../docs/Welcome/AppLogic/DataAnalytics';
import * as APIFinder from '../docs/Welcome/CodeAtlasTools/APIFinder';
import * as PlanningAgent from '../docs/Welcome/CodeAtlasTools/PlanningAgent';
import * as CommonTemplates from '../docs/Welcome/AdditionalResources/CommonTemplates';
import * as SiteXml from '../docs/Welcome/AdditionalResources/SiteXml';

// AllDocs/WebDev

// AllDocs/ and so on...

const guideModules = [
    Overview,
    HowToUse,
    ComponentSummary,
    WebDev,
    Mobile,
    Desktop,
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
