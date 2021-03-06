var mod = angular.module("webinarsMod", []);

mod.controller("webinarsCtrl", ["$scope", "$sce", function($scope, $sce) {
    $scope.upcomingWebinars = [
	    {
            date: '8 September 2015 | 3:00 PM Eastern Time',
            topic: 'Using Machine Learning to Identify Aberrant Pathway Activity',
            presenters: 'Stephen Piccolo, Brigham Young University'
            },


    ];
    $scope.pastWebinars = [
        {
            date: '25 August 2015',
            topic: 'Drug Repositioning by Integrating Target Information Through a Heterogeneous Network Model',
            presenters: 'Jing Li, Case Western Reserve University',
            synopsis:'The emergence of network medicine not only offers more opportunities for better and more complete understanding of the molecular complexities of diseases, but also serves as a promising tool for identifying new drug targets and establishing new relationships among diseases that enable drug repositioning. Computational approaches for drug repositioning by integrating information from multiple sources and multiple levels have the potential to provide great insights to the complex relationships among drugs, targets, disease genes and diseases at a system level. In this talk, I will present a computational framework based on a heterogeneous network model for drug repositioning by using existing omics data about diseases, drugs and drug targets. The novelty of the framework lies in the fact that the strength between a disease-drug pair is calculated through an iterative algorithm on the heterogeneous graph that also incorporates drug-target information. Comprehensive experimental results show that the approach significantly outperforms several recent approaches. Case studies further illustrate its practical usefulness.',
            link: '',
            },
	{
            date: '11 August 2015',
            topic: 'Biomedical Data Integration Toward Quality Healthcare Delivery',
            presenters: 'Qian Zhu, University of Maryland Baltimore County',
	    synopsis:'Traditionally, scientists spend a great deal of time on sifting through large amounts of raw data to find useful information for their research. With the recent advance in computational technologies, computational approaches are being increasingly applied in biomedical, even clinical domain to support biomedical related research and clinical decision making, further improve the quality and efficacy of healthcare. In my talk, I will present the effort made by my group on developing computational medical and clinical applications based on integrative biomedical and clinical data. Specifically, I will primarily describe our effort made on 1) drug discovery and 2) precision medicine.',
	    link: 'https://www.youtube.com/watch?v=U81g3BQhAe0'
        },
	{
            date: '23 June 2015',
            topic: 'The Construction of a Cluster Stack Based on Open Source Technologies',
            presenters: 'Matthew Jones, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
	        synopsis: 'Deploying applications and services across multiple computers can quickly become a complex operation. In addition, running distributed computing frameworks such as MPI, Hadoop or Spark on those same computers makes it even more challenging. To solve this problem we have combined a number of technologies to produce an operational cluster stack. Our stack is based on the Mesosphere Datacenter Operating System and provides a unified interface for interacting with many machines. In this webinar, we presented a stack built on Apache Mesos that uses Marathon for deploying web apps and other long running services; Docker for packaging dependencies and environments; Hadoop HDFS for storage; Spark for distributed data processing; Cassandra as a big data database; and Chronos for scheduled repetitive jobs. This webinar covered an overview of these technologies, why they are needed, and a brief demonstration on how to use them.',
            link: 'https://www.youtube.com/watch?v=QJPirW-JjQ4'
        },
        {
            date: '16 June 2015',
            topic: 'L1K++: A Fast Pipeline that Increases the Accuracy of L1000 Gene Expression Data',
            presenters: 'Ling-Hong Hung, University of Washington',
	        synopsis:'We have developed an alternative data processing pipeline called L1K++ for LINCS L1000 gene expression.  Our key idea in L1K++ is to combine the data from replicates before deconvoluting the two gene expression signals. This increases the accuracy of this step, and of all downstream inferences. Quantile normalization before deconvolution makes this possible. The gene expression signals are then robustly separated by fitting a gaussian mixture model. The pipeline is implemented entirely in C++ and uses linear and constant time algorithms. As a result, it is more than 1000x faster than current pipelines and can generate a complete set of Level 3 data from raw Level 1 data in a matter of hours. We expect that the L1K++ pipeline will result in the generation of more accurate drug signatures and gene networks.',
            link:'https://www.youtube.com/watch?v=jcpEagg1iaQ'
        },
        {
            date: '9 June 2015',
            topic: 'Drug Toxicity Signature Generation Center',
            presenters: 'Eric Sobie, Icahn School of Medicine at Mount Sinai, DToxS',
            synopsis: '',
	        link: 'https://www.youtube.com/watch?v=85xfd9YS3vQ'
        },
	    {
            date: '26 May 2015',
            topic: 'Integrative Analysis of Proteomics Data of Multi-Layered Post Translational Modifications Collected from Human Lung Cancer Cell Lines',
            presenters: 'Peter Hornbeck, Klarisa Rikova, Mark Grimes (Cell Signaling Technology Inc.) and Neil Clark, Nicolas Fernandez (Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC)',
            synopsis: '',
	        link: 'https://www.youtube.com/watch?v=HQxincOIqNM'
        },
	    {
            date: '5 May 2015',
            topic: 'Assessing the Global Dimensionality of LINCS Signatures',
            presenters: 'Neil Clark, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
            synopsis: 'With the advent of Big Data, the scalability of statistical methods has come to the forefront. By reducing large high-dimensional data sets to their intrinsic dimension many practical problems of data storage and handling, and computational expense of large-scale analysis are greatly alleviated. An example of one approach to this is to find a regularized, low-rank approximation to the data matrix; we show, as an example, that such a representation leads to faster computation time and higher accuracy when building a logistic regression classifier to predict the perturbing drug in L1000 LINCS data. This suggests that the low-rank approximation leads to cleaner perturbation signatures.  We provide further examples using LINCS Post Translational modification data from Cell Signaling. Furthermore, we describe a sample-size scaling approach to estimating the intrinsic dimensionality of high-dimensional data, and demonstrate the principal with an example from TCGA breast cancer gene expression profiles. This approach would not only allow optimal dimensionality reduction, but could also be used to extrapolate the sample size required to explore the space of perturbations.',
            link: 'https://www.youtube.com/watch?v=8s3HYdVlEoM'
        },
        {
            date: '21 April 2015',
            topic: 'Target Predictions using LINCS Perturbation Data',
            presenters: 'Yan Xia, Carnegie Mellon University',
	        synopsis: '',
	        link: 'https://www.youtube.com/watch?v=afz36W6G7iE'
        },
        {
            date: '14 April 2015',
            topic: 'Prediction of Adverse Events for LINCS Drugs using L1000 Gene Expression Data, Cell Morphology Profiles and Chemical Structure Features',
            presenters: 'Zichen Wang, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
            synopsis: $sce.trustAsHtml('<strong>Synopsis:</strong> Adverse-events are unintended and undesirable therapeutic response to drugs. Adverse-events are a major public health concern as well as a significant barrier in the drug development process. Failure to detect adverse-events for drugs before they are marketed can lead to substantial patient morbidity. Many efforts have been made to predict adverse-events using chemical and biological features of drugs, whereas the integration of features from chemical and biological origin has proven to improve adverse-events predictability. However, until recently, biological features about the properties of drugs are often limited to the known therapeutic targets of the drugs, or data from specific low-content assays. In contrast, for this study, we used gene expression responses and cell-morphology profiles measured in cell lines upon drug treatment. To predict adverse event we utilized the LINCS L1000 dataset and the Molecular Libraries Probe Production Centers Network (MLPCN) dataset as features to predict side adverse events. Additionally, we extracted features from the chemical structure of the drugs and combined these features with the expression and imaging features to better predict adverse events. First, we converted the LINCS L1000 gene expression profiles of drug treatments to Characteristic Directions in gene expression space to train a k-Nearest Neighbor classifier to predict adverse events. This method alone is already highly predictive (AUROC=0.892). We then combined the matrix derived from processing the gene expression L1000 data, with cell-morphology profiling data, and features extracted from the chemical structure of the drugs to train a multi-label classifier to predict drug adverse events. We found that combining multiple features using ensemble methods is able to achieve even better predictability. The predictive model was applied to all (~20,000) LINCS small molecule compounds profiled in by both L1000 LINCS and MLPCN projects and the results are delivered in an interactive freely available web-site at: <a href="http://www.maayanlab.net/SEP-L1000" target="_blank">http://www.maayanlab.net/SEP-L1000</a>.'),
            link: 'https://www.youtube.com/watch?v=EHUAU05O0kQ',
            isHtml: true
        },
        {
            date: '10 March 2015',
            topic: 'Transcriptional Landscape of Drug Response Guides the Design of Specific and Potent Drug Combinations',
            presenters: 'Marc Hafner, Harvard Medical School, HMS LINCS',
            synopsis: 'Characterizing the molecular effects of targeted therapies is an important step towards understanding and predicting drug efficacy in cancer. In this work, we used the L1000 assay to measure the transcriptional response of six breast cancer cell lines to more than 100 different targeted drugs. We focused on inhibitors targeting the most important signaling kinases such as PI3K, AKT or MAPK, as well as receptor tyrosine kinases (RTKs) and cyclin-dependent kinases (CDKs). With two time points and six doses, the dataset contains more than 8000 unique perturbations.',
            link: 'https://www.youtube.com/watch?v=kdKk3jHUR9c'
        },
        {
            date: '24 February 2015',
            topic: 'Leveraging Experimental Models to Advance our Understanding of Cancer',
            presenters: 'Laura Heiser, Oregon Health and Science University, MEP LINCS',
            synopsis: 'We and others have suggested the use of in vitro cell line panels to study the biological underpinnings of cancer and to test hypotheses that arise from studies of primary data. Specifically, we have used a collection of ~70 well characterized breast cancer cell lines to assess gene function and to identify mechanisms of response and resistance to therapeutic compounds. This set of molecular profiling data constitutes one of the most complete "omics" resources available in the public domain and includes assessments of gene expression, copy number, mutations, protein abundance, and response to therapy. Comparison of the genomic and epigenomic features of the cell lines with those measured for primary tumors by The Cancer Genome Atlas (TCGA) and others showed that the cell lines mirror many aspects of "omic" diversity in primary tumors. Cell line and tumor similarities include: (a) recurrent copy number changes and mutations (b) basal, claudin-low and luminal breast cancer subtypes, and (c) pathway activity. Analysis of correlations between drug sensitivity to 77 therapeutic compounds revealed that approximately 30% are associated with subtype or genome copy number aberration. Finally, we have used various statistical and machine learning approaches to identify integrated predictive signatures of sensitivity for ~50% of compounds in our cell line panel. These data and observations were the basis for a community-wide effort to identify biomarkers of drug sensitivity in the NCI-DREAM Drug Sensitivity Challenge that culminated in the robust identification of a novel machine learning algorithm for predicting drug response from molecular profiling data. This body of work has demonstrated the utility of in vitro model systems, identified biomarkers of drug sensitivity for clinically relevant compounds, and identified concrete approaches and considerations for advancing work in this domain.',
            link: 'https://www.youtube.com/watch?v=9KM7inVCLoc'
        },
        {
            date: '17 February 2015',
            topic: 'Discussion of Causes for Some Artifacts Observed in L1000 Data',
            presenters: 'Chad Young, University of Washington',
            synopsis: 'Chad Young examines the relationships between Level 3 expression level measurements for pairs of genes probed by the "same color" beads. He shows that in some situations the deconvolution algorithm produces misleading expression levels, In some situations, plate-level normalization helps in some it does not. Possibility that observed patterns represent underlying biology was suggested by audience and discussed, as well as alternative strategies for systematically identifying artifacts and benchmarking of such alternative strategies.',
            link: 'https://www.youtube.com/watch?v=d-E_siojRg4'
        },
        {
            date: '16 December 2014',
            topic: 'Large-scale Integration of Small Molecule-induced Reponses in Diverse LINCS Datasets',
            presenters: 'Dusica Vidovic, University of Miami, BD2K-LINCS DCIC',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=TKPSqRrtd6I'
        },
        {
            date: '9 December 2014',
            topic: 'Analysis of Lung Cancers Across Multiple Signaling Spaces to Identify New Disease Drivers and Network Connectivity',
            presenters: 'Peter Hornbeck, Cell Signaling Technology Inc.',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=mgud2LcCdVY'
        },
        {
            date: '2 December 2014',
            topic: 'Explaining Artifacts in Level 3 L1000 Data | Benchmarking Perturbation Signatures',
            presenters: 'Mario Medvedovic, University of Cincinnati, BD2K-LINCS DCIC',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=eEIXm5rpo-E'
        },
	    {
            date: '18 Nov 2014',
            topic: 'Creating Signatures from the ENCODE Data',
            presenters: 'Yan Kou, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=HjDakxNoFCE'
        },
        {
            date: '18 Nov 2014',
            topic: 'Issues in Level 3 L1000 Data',
            presenters: 'Chad Young, University of Washington',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=-tActS2zkEU'
        },
        {
            date: '28 October 2014',
            topic: 'LINCS L1000 Analysis with the Characteristic Direction Method',
            presenters: 'Qiaonan Duan, Icahn School of Medicine at Mount Sinai, BD2K-LINCS DCIC',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=6rkqn6sqmBI'
        },
        {
            date: '21 October 2014',
            topic: 'L1000 Indexing Process',
            presenters: 'Amar Koleti, University of Miami, BD2K-LINCS DCIC',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=ncaSK0y36ck'
        },
        {
            date: '14 October 2014',
            topic: 'L1000 Data Access and Processing',
            presenters: 'Mario Medvedovic, University of Cincinnati, BD2K-LINCS DCIC',
            synopsis: '',
            link: 'https://www.youtube.com/watch?v=3ww9Bnhv1c4'
        } 
    ];
}]);
