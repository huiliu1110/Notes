import sinon from 'sinon';

import jobAPI from './JobAPIConnectors';

describe('job API', () => {
  const {
    getJobList,
    createNewJob,
    resubmitJob,
    updateJob,
    scheduleJob,
    deleteJob,
    getAnalysis,
    queryOverview,
    queryEvents,
    queryTopics,
    queryPeople,
    queryLocations,
    querySenders,
    queryPublications,
    queryDocuments,
    fetchOverview,
    fetchMergedDocument,
    fetchSingleDocument,
    fetchSenderDocs,
    fetchPublicationDocs,
    getEventsInfo,
    getTopicsInfo,
    getDocumentsInfo,
    getReadingListInfo,
    getPeopleInfo,
    getLocationsInfo,
    getKeyNumbers,
    getQuotes,
    getKeyDates
  } = jobAPI;
  const mockJob = {
    job_status: 'completed',
    owner_key: 'AV2fhjKm1kBOTWjKtHo_',
    submit_date: '2017-08-01T20:40:35.913275+00:00',
    pipeline_settings:
      '{"topic": {"big_numbers_with_full_mentions": {"is_stringent": true, "compute": true}, "label": {"method": "ngram"}}, "corpus": {"people": {"single_word_cross_doc_resolution": true, "compute": true, "min_num_merged_documents": 2}, "overview": {"event_centric": true}, "topics": {"min_size": 3}, "locations": {"compute": true, "min_num_merged_documents": 2}, "quotes_with_full_mentions": {"compute": true}, "timeseries": {"simple_analysis_only": false}, "_tfidf": {"remove_publication_specific_language": false, "max_tf": 50}, "events": {"min_event_size": 3, "decay_time_constant": 604800, "compute": true}, "_document_dedupe": {"compute": true}}, "event": {"label": {"method": "title"}}, "singledoc": {"clean_text_and_raw_spans": {"bad_sentences_remove_contacts": true, "remove_bad_sentences": true, "remove_duplicate_sentences_within_body": true, "bad_sentences_min_words": 3}, "quote_spans": {"min_quote_words": 3}}}',
    pb_recurrence_reference_date: '2017-08-15T20:02:16.101047+00:00',
    recurrence_interval_hours: null,
    key: 'AV2fh2FH1kBOTWjKtHpA',
    queries: [
      {
        template_key: 'templated_mo-en_query',
        parameters: [
          {
            datatype: 'String',
            key: 'content',
            value: 'google'
          },
          {
            datatype: 'Date',
            key: 'start_date',
            value: '2017-07-30'
          },
          {
            datatype: 'Date',
            key: 'end_date',
            value: '2017-07-31'
          },
          {
            datatype: 'Number',
            key: 'max_results',
            value: '500'
          }
        ]
      }
    ],
    job_name: 'google'
  };
  let sandbox;
  let server;
  let sendResponse;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    server = sandbox.useFakeServer();
    sendResponse = (statusCode = 200, data = {}) => {
      server.respond([
        statusCode,
        { 'Content-Type': 'application/json' },
        JSON.stringify(data)
      ]);
    };
  });

  afterEach(() => {
    server.restore();
    sandbox.restore();
    sendResponse = null;
  });

  it('APIs are defined.', () => {
    expect(getJobList).toBeDefined();
    expect(createNewJob).toBeDefined();
    expect(resubmitJob).toBeDefined();
    expect(updateJob).toBeDefined();
    expect(scheduleJob).toBeDefined();
    expect(deleteJob).toBeDefined();
    expect(getAnalysis).toBeDefined();
    expect(queryOverview).toBeDefined();
    expect(queryEvents).toBeDefined();
    expect(queryTopics).toBeDefined();
    expect(queryPeople).toBeDefined();
    expect(queryLocations).toBeDefined();
    expect(querySenders).toBeDefined();
    expect(queryPublications).toBeDefined();
    expect(queryDocuments).toBeDefined();
    expect(fetchOverview).toBeDefined();
    expect(fetchMergedDocument).toBeDefined();
    expect(fetchSingleDocument).toBeDefined();
    expect(fetchSenderDocs).toBeDefined();
    expect(fetchPublicationDocs).toBeDefined();
    expect(getEventsInfo).toBeDefined();
    expect(getTopicsInfo).toBeDefined();
    expect(getDocumentsInfo).toBeDefined();
    expect(getReadingListInfo).toBeDefined();
    expect(getPeopleInfo).toBeDefined();
    expect(getLocationsInfo).toBeDefined();
    expect(getKeyNumbers).toBeDefined();
    expect(getQuotes).toBeDefined();
    expect(getKeyDates).toBeDefined();
  });

  it('getJobList: request returns 200 status.', done => {
    const mockData = [].push(mockJob);

    getJobList().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200, mockData), 0);
  });

  it('createNewJob: request returns 200 status.', done => {
    const mockData = {};

    createNewJob().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('resubmitJob: request returns 200 status.', done => {
    const mockData = {};

    resubmitJob().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('updateJob: request returns 200 status.', done => {
    const mockData = {};

    updateJob().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('scheduleJob: request returns 200 status.', done => {
    const mockData = {};

    scheduleJob().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('deleteJob: request returns 200 status.', done => {
    const mockData = {};

    deleteJob().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('getAnalysis: request returns 200 status.', done => {
    const mockData = {};

    getAnalysis().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('queryOverview: request returns 200 status.', done => {
    const mockData = {};

    queryOverview().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('queryEvents: request returns 200 status.', done => {
    const mockData = {};

    queryEvents().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('queryTopics: request returns 200 status.', done => {
    const mockData = {};

    queryTopics().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('queryPeople: request returns 200 status.', done => {
    const mockData = {};

    queryPeople().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('queryLocations: request returns 200 status.', done => {
    const mockData = {};

    queryLocations().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('querySenders: request returns 200 status.', done => {
    const mockData = {};

    querySenders().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('queryPublications: request returns 200 status.', done => {
    const mockData = {};

    queryPublications().then(res => {
      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('queryDocuments: request returns 200 status.', done => {
    queryDocuments().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('fetchOverview: request returns 200 status.', done => {
    fetchOverview().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('fetchMergedDocument: request returns 200 status.', done => {
    fetchMergedDocument().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('fetchSingleDocument: request returns 200 status.', done => {
    fetchSingleDocument().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('fetchSenderDocs: request returns 200 status.', done => {
    fetchSenderDocs().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('fetchPublicationDocs: request returns 200 status.', done => {
    fetchPublicationDocs().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('getEventsInfo: request returns 200 status.', done => {
    getEventsInfo().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('getTopicsInfo: request returns 200 status.', done => {
    getTopicsInfo().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('getDocumentsInfo: request returns 200 status.', done => {
    getDocumentsInfo().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('getReadingListInfo: request returns 200 status.', done => {
    getReadingListInfo().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('getPeopleInfo: request returns 200 status.', done => {
    getPeopleInfo().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('getLocationsInfo: request returns 200 status.', done => {
    getLocationsInfo().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('getKeyNumbers: request returns 200 status.', done => {
    getKeyNumbers().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('getQuotes: request returns 200 status.', done => {
    getQuotes().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });

  it('getKeyDates: request returns 200 status.', done => {
    getKeyDates().then(res => {
      const mockData = {};

      expect(res.ok).toEqual(true);
      expect(res.data).toEqual(mockData);
      done();
    });

    setTimeout(() => sendResponse(200), 0);
  });
});
