import React, { ReactElement } from 'react';
import { Redirect } from '@reach/router';

import { images } from '../stores/Img.store';
import { SVGTypes } from '../components/atoms/SVGIcon';
import AnimatedRoutes from '../components/molecules/AnimatedRoutes';
import AboutRoute from './About.route';
import ContactRoute from './Contact.route';
import FenceRoute from './Fence.route';
import HomeRoute from './Home.route';
import IrrigationRoute from './Irrigation.route';
import LandscapeRoute from './Landscape.route';
import LightingRoute from './Lighting.route';
import MaintenanceRoute from './Maintenance.route';
import MonumentRoute from './Monument.route';
import MonumentRepairRoute from './MonumentRepair.route';
import ServicesRoute from './Services.route';
import SubscribeRoute from './Subscribe.route';
import TrimmingRoute from './Trimming.route';

/** images **/
const { imgCarnival, imgColoredPencils, imgFence1, imgFenceBroken, imgFenceRepair, imgFlowers1, imgGrass, imgGuyPlanting1, imgGuyPlanting2, imgGuyTeaching2, imgHome, imgLandscapeRendering, imgLawnMower1, imgLawnMower2, imgLeaves, imgLighting1, imgLighting2, imgLighting3, imgMonument1, imgMonument2, imgMonument3, imgMonument4, imgMonument5, imgMonument6, imgMonument7, imgMonument8, imgNewsLetter1, imgNewsLetter2, imgNewsLetter3, imgOverhead1, imgOverhead2, imgOverhead3, imgParklaneFamily, imgPictureFrame, imgSprinklers1, imgSprinklers2, imgTrees1, imgTrees2, imgTreeTrimming, logoAnniversary, logoMain } = images;

export enum Paths {
  ABOUT = '/about',
  CONTACT = '/contact',
  FENCE = '/services/fence',
  HOME = '/',
  IRRIGATION = '/services/irrigation',
  LANDSCAPE = '/services/landscape',
  LIGHTING = '/services/lighting',
  MAINTENANCE = '/services/maintenance',
  MONUMENT = '/services/monument',
  MONUMENT_REPAIR = '/services/monumentRepair',
  SERVICES = '/services',
  SUBSCRIBE = '/learn-more',
  TRIMMING = '/services/trimming'
}

interface IRoute {
  active: boolean;
  children?: IRoute[];
  Component: ReactElement;
  displayInHeader?: boolean;
  headerLinkLines?: string[];
  icon?: SVGTypes;
  iconSize?: string;
  name: string;
  path: Paths;
  prefetchImages: string[];
}

export const routArr: IRoute[] = [
  {
    active: true,
    children: [],
    Component: <HomeRoute />,
    name: 'Home',
    path: Paths.HOME,
    prefetchImages: [imgGrass, imgHome, logoAnniversary]
  },
  {
    active: true,
    children: [],
    Component: <AboutRoute />,
    name: 'About',
    path: Paths.ABOUT,
    prefetchImages: [imgCarnival, imgMonument6, imgParklaneFamily, imgPictureFrame, imgTrees2, logoMain]
  },
  {
    active: true,
    children: [
      {
        active: true,
        Component: <MaintenanceRoute />,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Maintenance'],
        icon: SVGTypes.LAWN_MOWER,
        iconSize: '22px',
        name: 'HOA Maintenance',
        path: Paths.MAINTENANCE,
        prefetchImages: [imgLawnMower1, imgLawnMower2]
      },
      {
        active: true,
        Component: <IrrigationRoute />,
        displayInHeader: true,
        headerLinkLines: ['HOA Licensed', 'Irrigation'],
        icon: SVGTypes.HOSE,
        iconSize: '22px',
        name: 'HOA Irrigation',
        path: Paths.IRRIGATION,
        prefetchImages: [imgSprinklers1, imgSprinklers2]
      },
      {
        active: true,
        Component: <LandscapeRoute />,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Landscaping'],
        icon: SVGTypes.LANDSCAPE,
        iconSize: '24px',
        name: 'HOA Landscaping',
        path: Paths.LANDSCAPE,
        prefetchImages: [imgColoredPencils, imgFlowers1, imgMonument1, imgLandscapeRendering, imgOverhead2, imgOverhead3]
      },
      {
        active: true,
        Component: <MonumentRoute />,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Monuments'],
        icon: SVGTypes.MONUMENT,
        iconSize: '19px',
        name: 'HOA Monument Installation',
        path: Paths.MONUMENT,
        prefetchImages: [imgMonument1, imgMonument4, imgMonument5]
      },
      {
        active: true,
        Component: <MonumentRepairRoute />,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Masonry'],
        icon: SVGTypes.MASONRY,
        iconSize: '20px',
        name: 'HOA Monument Repair',
        path: Paths.MONUMENT_REPAIR,
        prefetchImages: [imgMonument2, imgMonument3, imgMonument7, imgMonument8]
      },
      {
        active: true,
        Component: <FenceRoute />,
        displayInHeader: true,
        headerLinkLines: ['HOA Fence', 'Installation'],
        icon: SVGTypes.FENCE,
        iconSize: '22px',
        name: 'Fence Installation',
        path: Paths.FENCE,
        prefetchImages: [imgFence1, imgFenceBroken, imgFenceRepair]
      },
      {
        active: true,
        Component: <LightingRoute />,
        displayInHeader: true,
        headerLinkLines: ['HOA Landscape', 'Lighting'],
        icon: SVGTypes.LIGHT_BULB,
        iconSize: '29px',
        name: 'HOA Landscape Lighting',
        path: Paths.LIGHTING,
        prefetchImages: [imgLighting1, imgLighting2, imgLighting3]
      },
      {
        active: true,
        Component: <TrimmingRoute />,
        displayInHeader: true,
        headerLinkLines: ['HOA Tree', 'Pruning'],
        icon: SVGTypes.TREES,
        iconSize: '20px',
        name: 'HOA Tree Pruning',
        path: Paths.TRIMMING,
        prefetchImages: [imgLeaves, imgTrees1, imgTreeTrimming]
      }
    ],
    Component: <ServicesRoute />,
    name: 'Services',
    path: Paths.SERVICES,
    prefetchImages: [imgGuyPlanting2, imgGuyTeaching2]
  },
  {
    active: true,
    children: [],
    Component: <SubscribeRoute />,
    name: 'Get Informed',
    path: Paths.SUBSCRIBE,
    prefetchImages: [imgGuyPlanting1, imgNewsLetter1, imgNewsLetter2, imgNewsLetter3]
  },
  {
    active: true,
    children: [],
    Component: <ContactRoute />,
    name: 'Contact',
    path: Paths.CONTACT,
    prefetchImages: [imgLeaves, imgOverhead1]
  }
];
function Routes() {
  return (
    <AnimatedRoutes>
      <AboutRoute path={Paths.ABOUT} />
      <ContactRoute path={Paths.CONTACT} />
      <FenceRoute path={Paths.FENCE} />
      <HomeRoute path={Paths.HOME} />
      <IrrigationRoute path={Paths.IRRIGATION} />
      <LandscapeRoute path={Paths.LANDSCAPE} />
      <LightingRoute path={Paths.LIGHTING} />
      <MaintenanceRoute path={Paths.MAINTENANCE} />
      <MonumentRoute path={Paths.MONUMENT} />
      <MonumentRepairRoute path={Paths.MONUMENT_REPAIR} />
      <ServicesRoute path={Paths.SERVICES} />
      <SubscribeRoute path={Paths.SUBSCRIBE} />
      <TrimmingRoute path={Paths.TRIMMING} />

      <Redirect to={Paths.HOME} from={Paths.HOME} default noThrow />
    </AnimatedRoutes>
  );
}
export default Routes;
