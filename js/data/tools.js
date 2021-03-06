
var mod = angular.module("toolsMod", []);

mod.controller("toolsCtrl", ["$scope", "$sce", function($scope, $sce) {

    var DIR = 'images/apps/';

    $scope.introText = $sce.trustAsHtml("The DCIC develops web-based tools for integrative data access and visualization across the distributed LINCS and BD2K sites and other relevant data sources. Our next generation integrated web-based platform for the LINCS project serves as the foundation for all LINCS activities and federates all LINCS data, signatures, analysis algorithms, pipelines, APIs and web tools.");

    $scope.tools = [
        {
            title: "Enrichr",
            description: "An easy to use intuitive enrichment analysis web-based tool providing various types of visualization summaries of collective functions of gene lists.",
            url: "http://amp.pharm.mssm.edu/Enrichr/",
            target: "_blank",
            image: DIR + "enrichr.png",
            shortDesc: "Search Engine for Gene Lists and Signatures"
        },
        {
            title: "GEO2Enrichr",
            description: "A browser extension and web application to extract gene sets from GEO and analyze these lists for common biological functions.",
            url: "http://amp.pharm.mssm.edu/g2e/",
            target: "_blank",
            image: DIR + "g2e.png",
            shortDesc: "Differential Expression Analysis Tool"
        },
        {
            title: "piLINCS",
            description: "A seamless user interface and intermediate API for accessing LINCS proteomics datasets (P100, GCP, etc.) on Panorama.",
            url: "http://eh3.uc.edu/pilincs",
            target: "_blank",
            image: DIR + "pilincs.png",
            shortDesc: "Interface to panoramaweb.org"
        },
        {
            title: "L1000CDS2",
            description: "L1000CDS<span class='super'>2</span> queries gene expression signatures against the LINCS L1000 to identify and prioritize small molecules that can reverse or mimic the observed input expression pattern.",
            url: "http://amp.pharm.mssm.edu/L1000CDS2/",
            target: "_blank",
            image: DIR + "l1000cds2.png",
            shortDesc: "L1000 Characteristic Direction Signature Search Engine",
            isHtml: true
        },
        {
            title: "PAEA",
            description: "PAEA is a new R/Shiny gene set enrichment web application with over 70 gene set libraries available for enrichment analysis.",
            url: "http://amp.pharm.mssm.edu/PAEA/",
            target: "_blank",
            image: DIR + "paea.png",
            shortDesc: "Principle Angle Enrichment Analysis"
        },
        {
            title: "LINCS Information Framework (LIFE)",
            description: "Integrates all LINCS content leveraging a semantic knowledge model and common LINCS metadata standards.",
            url: "http://life.ccs.miami.edu/life/",
            target: "_blank",
            image: DIR + "life.png",
            shortDesc: "LINCS Information System"
        },
        {
            title: "iLINCS",
            description: "A computational biology project aimed at developing statistical methods and computational tools for integrative analysis of the data produced by the Library of Integrated Network-based Cellular Signatures (LINCS) program.",
            url: "http://eh3.uc.edu/GenomicsPortals/viewiLincs.jsp",
            target: "_blank",
            image: DIR + "ilincs.png",
            shortDesc: "LINCS Web Portal"
        },
        {
            title: "LINCS Canvas Browser",
            description: "The LINCS Canvas Browser is an interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures.",
            url: "http://www.maayanlab.net/LINCS/LCB/",
            target: "_blank",
            image: DIR + "lincs-canvas-browser.png",
            shortDesc: "LINCS L1000 Clustering, Visualization and Enrichment Analysis Tool"
        },
        {
            title: "Drug/Cell-line Browser",
            description: "An online interactive HTML5 data visualization tool for interacting with three of the recently published datasets of cancer cell lines/drug-viability studies.",
            url: "http://www.maayanlab.net/LINCS/DCB/",
            target: "_blank",
            image: DIR + "drug-cell-line-browser.png",
            shortDesc: "Data Visualization Tool"
        },
        {
            title: "Network2Canvas",
            description: "A web application that provides an alternative way to view networks and visualizes them by placing nodes on a square toroidal canvas.",
            url: "http://www.maayanlab.net/N2C/",
            target: "_blank",
            image: DIR + "network2canvas.png",
            shortDesc: "Network Visualization on a Canvas with Enrichment Analysis"    
        }
    ];
    
    $scope.lincsVizTools = [
        {
            title: "Docent I",
            description: "Docent provides a quantified, interactive view of the biological entities such as cell lines, small molecules, and assays within LINCS data.",
            url: "http://amp.pharm.mssm.edu/public/docent/",
            target: "_blank",
            image: DIR + "docent-i.png",
            shortDesc: "An overview guide into LINCS data"
        },
        {
            title: "Docent II",
            description: "Docent II provides an interactive plot of available and upcoming data from the LINCS DSGCs.",
            url: "http://amp.pharm.mssm.edu/milestonesViz/",
            target: "_blank",
            image: DIR + "docent-ii.png",
            shortDesc: "Overview of the LINCS Data Signature Generation Centers (DSGCs) Data Release Milestones"
        },

    ];
}]);
