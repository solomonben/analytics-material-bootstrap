export class ProjectDashboardDb
{
    public static projects = [
        {
            'name': 'ACME Corp. Backend App'
        },
        {
            'name': 'ACME Corp. Frontend App'
        },
        {
            'name': 'Creapond'
        },
        {
            'name': 'Withinpixels'
        }
    ];

    public static widgets = {
        'widget1'      : {
            'ranges'      : {
                'DY' : 'Yesterday',
                'DT' : 'Today',
                'DTM': 'Tomorrow'
            },
            'currentRange': 'DT',
            'data'        : {
                'label': 'DUE TASKS',
                'count': {
                    'DY' : 21,
                    'DT' : 25,
                    'DTM': 19
                },
                'extra': {
                    'label': 'Completed',
                    'count': {
                        'DY' : 6,
                        'DT' : 7,
                        'DTM': '-'
                    }

                }
            },
            'detail'      : 'You can show some detailed information about this widget in here.'
        },
        'widget2'      : {
            'title' : 'Overdue',
            'data'  : {
                'label': 'TASKS',
                'count': 4,
                'extra': {
                    'label': 'Yesterday\'s overdue',
                    'count': 2
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget3'      : {
            'title' : 'Issues',
            'data'  : {
                'label': 'OPEN',
                'count': 32,
                'extra': {
                    'label': 'Closed today',
                    'count': 0
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget4'      : {
            'title' : 'Features',
            'data'  : {
                'label': 'PROPOSALS',
                'count': 42,
                'extra': {
                    'label': 'Implemented',
                    'count': 8
                }
            },
            'detail': 'You can show some detailed information about this widget in here.'
        },
        'widget5'      : {
            'title'     : 'Github Issues',
            'ranges'    : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart' : {
                '2W': [
                    {
                        'name'  : 'Mon',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 37
                            },
                            {
                                'name' : 'closed issues',
                                'value': 9
                            }
                        ]
                    },
                    {
                        'name'  : 'Tue',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 32
                            },
                            {
                                'name' : 'closed issues',
                                'value': 12
                            }
                        ]
                    },
                    {
                        'name'  : 'Wed',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 39
                            },
                            {
                                'name' : 'closed issues',
                                'value': 9
                            }
                        ]
                    },
                    {
                        'name'  : 'Thu',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 27
                            },
                            {
                                'name' : 'closed issues',
                                'value': 12
                            }
                        ]
                    },
                    {
                        'name'  : 'Fri',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 18
                            },
                            {
                                'name' : 'closed issues',
                                'value': 7
                            }
                        ]
                    },
                    {
                        'name'  : 'Sat',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 24
                            },
                            {
                                'name' : 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name'  : 'Sun',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 20
                            },
                            {
                                'name' : 'closed issues',
                                'value': 16
                            }
                        ]
                    }
                ],
                'LW': [
                    {
                        'name'  : 'Mon',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 37
                            },
                            {
                                'name' : 'closed issues',
                                'value': 12
                            }
                        ]
                    },
                    {
                        'name'  : 'Tue',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 24
                            },
                            {
                                'name' : 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name'  : 'Wed',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 51
                            },
                            {
                                'name' : 'closed issues',
                                'value': 7
                            }
                        ]
                    },
                    {
                        'name'  : 'Thu',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 31
                            },
                            {
                                'name' : 'closed issues',
                                'value': 13
                            }
                        ]
                    },
                    {
                        'name'  : 'Fri',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 29
                            },
                            {
                                'name' : 'closed issues',
                                'value': 7
                            }
                        ]
                    },
                    {
                        'name'  : 'Sat',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 17
                            },
                            {
                                'name' : 'closed issues',
                                'value': 6
                            }
                        ]
                    },
                    {
                        'name'  : 'Sun',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 31
                            },
                            {
                                'name' : 'closed issues',
                                'value': 10
                            }
                        ]
                    }
                ],
                'TW': [
                    {
                        'name'  : 'Mon',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 42
                            },
                            {
                                'name' : 'closed issues',
                                'value': 11
                            }
                        ]
                    },
                    {
                        'name'  : 'Tue',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 28
                            },
                            {
                                'name' : 'closed issues',
                                'value': 10
                            }
                        ]
                    },
                    {
                        'name'  : 'Wed',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 43
                            },
                            {
                                'name' : 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name'  : 'Thu',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 34
                            },
                            {
                                'name' : 'closed issues',
                                'value': 11
                            }
                        ]
                    },
                    {
                        'name'  : 'Fri',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 20
                            },
                            {
                                'name' : 'closed issues',
                                'value': 8
                            }
                        ]
                    },
                    {
                        'name'  : 'Sat',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 25
                            },
                            {
                                'name' : 'closed issues',
                                'value': 10
                            }
                        ]
                    },
                    {
                        'name'  : 'Sun',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 22
                            },
                            {
                                'name' : 'closed issues',
                                'value': 17
                            }
                        ]
                    }
                ]
            },
            'supporting': {
                'created'  : {
                    'label': 'CREATED',
                    'count': {
                        '2W': 48,
                        'LW': 46,
                        'TW': 54
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'CREATED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'Created',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'Created',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                'closed'   : {
                    'label': 'CLOSED',
                    'count': {
                        '2W': 27,
                        'LW': 31,
                        'TW': 26
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'CLOSED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'CLOSED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'CLOSED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'reOpened' : {
                    'label': 'RE-OPENED',
                    'count': {
                        '2W': 4,
                        'LW': 5,
                        'TW': 2
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'RE-OPENED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'RE-OPENED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'RE-OPENED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                'wontFix'  : {
                    'label': 'WON\'T FIX',
                    'count': {
                        '2W': 6,
                        'LW': 3,
                        'TW': 4
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'WON\'T FIX',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 2
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'WON\'T FIX',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'WON\'T FIX',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'needsTest': {
                    'label': 'NEEDS TEST',
                    'count': {
                        '2W': 10,
                        'LW': 7,
                        'TW': 8
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'NEEDS TEST',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'NEEDS TEST',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'NEEDS TEST',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'fixed'    : {
                    'label': 'FIXED',
                    'count': {
                        '2W': 21,
                        'LW': 17,
                        'TW': 14
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'FIXED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'FIXED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'FIXED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 2
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        },
        'widget6'      : {
            'title'      : 'Task Distribution',
            'ranges'     : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'mainChart'  : {
                'TW': [
                    {
                        'name' : 'Frontend',
                        'value': 15
                    },
                    {
                        'name' : 'Backend',
                        'value': 20
                    },
                    {
                        'name' : 'API',
                        'value': 38
                    },
                    {
                        'name' : 'Issues',
                        'value': 27
                    }
                ],
                'LW': [
                    {
                        'name' : 'Frontend',
                        'value': 19
                    },
                    {
                        'name' : 'Backend',
                        'value': 16
                    },
                    {
                        'name' : 'API',
                        'value': 42
                    },
                    {
                        'name' : 'Issues',
                        'value': 23
                    }
                ],
                '2W': [
                    {
                        'name' : 'Frontend',
                        'value': 18
                    },
                    {
                        'name' : 'Backend',
                        'value': 17
                    },
                    {
                        'name' : 'API',
                        'value': 40
                    },
                    {
                        'name' : 'Issues',
                        'value': 25
                    }
                ]
            },
            'footerLeft' : {
                'title': 'Tasks Added',
                'count': {
                    '2W': 487,
                    'LW': 526,
                    'TW': 594
                }
            },
            'footerRight': {
                'title': 'Tasks Completed',
                'count': {
                    '2W': 193,
                    'LW': 260,
                    'TW': 287
                }
            }
        },
        'widget7'      : {
            'title'   : 'Schedule',
            'ranges'  : {
                'T' : 'Today',
                'TM': 'Tomorrow'
            },
            'schedule': {
                'T' : [
                    {
                        'title'   : 'Group Meeting',
                        'time'    : 'In 32 minutes',
                        'location': 'Room 1B'
                    },
                    {
                        'title': 'Coffee Break',
                        'time' : '10:30 AM'
                    },
                    {
                        'title': 'Public Beta Release',
                        'time' : '11:00 AM'
                    },
                    {
                        'title': 'Lunch',
                        'time' : '12:10 PM'
                    },
                    {
                        'title': 'Dinner with David',
                        'time' : '17:30 PM'
                    },
                    {
                        'title': 'Jane\'s Birthday Party',
                        'time' : '19:30 PM'
                    },
                    {
                        'title': 'Overseer\'s Retirement Party',
                        'time' : '21:30 PM'
                    }
                ],
                'TM': [
                    {
                        'title': 'Marketing Meeting',
                        'time' : '09:00 AM'
                    },
                    {
                        'title': 'Public Announcement',
                        'time' : '11:00 AM'
                    },
                    {
                        'title': 'Lunch',
                        'time' : '12:10 PM'
                    },
                    {
                        'title': 'Meeting with Beta Testers',
                        'time' : '15:00 AM'
                    },
                    {
                        'title': 'Live Stream',
                        'time' : '17:30 PM'
                    },
                    {
                        'title': 'Release Party',
                        'time' : '19:30 PM'
                    },
                    {
                        'title': 'CEO\'s Party',
                        'time' : '22:30 PM'
                    }
                ]
            }
        },
        'widget8'      : {
            'title'    : 'Budget Distribution',
            'mainChart': [
                {
                    'name' : 'Wireframing',
                    'value': 12
                },
                {
                    'name' : 'Design',
                    'value': 17
                },
                {
                    'name' : 'Coding',
                    'value': 28
                },
                {
                    'name' : 'Marketing',
                    'value': 25
                },
                {
                    'name' : 'Extra',
                    'value': 15
                }
            ]
        },
        'widget9'      : {
            'title'         : 'Spent',
            'ranges'        : {
                'TW': 'This Week',
                'LW': 'Last Week',
                '2W': '2 Weeks Ago'
            },
            'weeklySpent'   : {
                'title': 'WEEKLY SPENT',
                'count': {
                    '2W': '2,682.85',
                    'LW': '1,445.34',
                    'TW': '3,630.15'
                },
                'chart': {
                    '2W': [
                        {
                            'name'  : 'CREATED',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 6
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 1
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 3
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 2
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 4
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 6
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 2
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 2
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 1
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 3
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 2
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 6
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 5
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 3
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 6
                                }
                            ]
                        }
                    ]
                }
            },
            'totalSpent'    : {
                'title': 'TOTAL SPENT',
                'count': {
                    '2W': '29,682.85',
                    'LW': '31,128.19',
                    'TW': '34,758.34'
                },
                'chart': {
                    '2W': [
                        {
                            'name'  : 'CREATED',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 3
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 2
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 2
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 7
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 7
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 5
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 7
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 8
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 8
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 6
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 4
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 1
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 6
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 4
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 7
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 5
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 4
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 7
                                }
                            ]
                        }
                    ]
                }
            },
            'remaining'     : {
                'title': 'REMAINING',
                'count': {
                    '2W': '94.317,15',
                    'LW': '92.871,81',
                    'TW': '89.241,66'
                },
                'chart': {
                    '2W': [
                        {
                            'name'  : 'CREATED',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 1
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 4
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 5
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 7
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 8
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 2
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 3
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 2
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 1
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 8
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 8
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 2
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 4
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 8
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 6
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 2
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 1
                                }
                            ]
                        }
                    ]
                }
            },
            'totalRemaining': {
                'title': 'TOTAL BUDGET',
                'count': '124.000,00'
            },
            'totalBudget'   : {
                'title': 'TOTAL BUDGET',
                'count': '124.000,00'
            }
        },
        'widget10'     : {
            'title': 'Budget Details',
            'table': {
                'columns': [
                    {
                        'title': 'Budget Type'
                    },
                    {
                        'title': 'Total Budget'
                    },
                    {
                        'title': 'Spent ($)'
                    },
                    {
                        'title': 'Spent (%)'
                    },
                    {
                        'title': 'Remaining ($)'
                    },
                    {
                        'title': 'Remaining (%)'
                    }
                ],
                'rows'   : [
                    [
                        {
                            'value'  : 'Wireframing',
                            'classes': 'primary',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$14,880.00',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$14,000.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%94.08',
                            'classes': 'text-success',
                            'icon'   : 'trending_up'
                        },
                        {
                            'value'  : '$880.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%5.92',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Design',
                            'classes': 'green',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$21,080.00',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$17,240.34',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%81.78',
                            'classes': 'text-success',
                            'icon'   : 'trending_up'
                        },
                        {
                            'value'  : '$3,839.66',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%18.22',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Coding',
                            'classes': 'red',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$34,720.00',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$3,518.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%10.13',
                            'classes': 'text-danger',
                            'icon'   : 'trending_down'
                        },
                        {
                            'value'  : '$31,202.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%89.87',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Marketing',
                            'classes': 'accent',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$34,720.00',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$0.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%0.00',
                            'classes': 'text-info',
                            'icon'   : 'trending_flat'
                        },
                        {
                            'value'  : '$34,720.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%100.00',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Extra',
                            'classes': 'orange',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$18,600.00',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$0.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%0.00',
                            'classes': 'text-info',
                            'icon'   : 'trending_flat'
                        },
                        {
                            'value'  : '$34,720.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%100.00',
                            'classes': '',
                            'icon'   : ''
                        }
                    ]
                ]
            }
        },
        'widget11'     : {
            'title': 'Team Members',
            'table': {
                'columns': ['avatar', 'name', 'position', 'office', 'email', 'phone'],
                'rows'   : [
                    {
                        avatar  : 'assets/images/avatars/james.jpg',
                        name    : 'Jack Gilbert',
                        position: 'Design Manager',
                        office  : 'Johor Bahru',
                        email   : 'jgilbert48@mail.com',
                        phone   : '+16 298 032 7774'
                    },
                    {
                        avatar  : 'assets/images/avatars/katherine.jpg',
                        name    : 'Kathy Anderson',
                        position: 'Recruiting Manager',
                        office  : 'Solţānābād',
                        email   : 'kanderson49@mail.com.br',
                        phone   : '+23 572 311 1136'
                    },
                    {
                        avatar  : 'assets/images/avatars/andrew.jpg',
                        name    : 'Mark Turner',
                        position: 'Recruiting Manager',
                        office  : 'Neftegorsk',
                        email   : 'mturner4a@mail.com',
                        phone   : '+01 139 803 9263'
                    },
                    {
                        avatar  : 'assets/images/avatars/jane.jpg',
                        name    : 'Kathryn Martinez',
                        position: 'Director of Sales',
                        office  : 'Palekastro',
                        email   : 'kmartinez4b@mail.com',
                        phone   : '+25 467 022 5393'
                    },
                    {
                        avatar  : 'assets/images/avatars/alice.jpg',
                        name    : 'Annie Gonzales',
                        position: 'Actuary',
                        office  : 'Candon',
                        email   : 'agonzales4c@mail.edu',
                        phone   : '+99 891 619 7138'
                    },
                    {
                        avatar  : 'assets/images/avatars/vincent.jpg',
                        name    : 'Howard King',
                        position: 'Human Resources',
                        office  : 'Bergen op Zoom',
                        email   : 'hking4d@mail.gov',
                        phone   : '+46 984 348 1409'
                    },
                    {
                        avatar  : 'assets/images/avatars/joyce.jpg',
                        name    : 'Elizabeth Dixon',
                        position: 'Electrical Engineer',
                        office  : 'Písečná',
                        email   : 'edixon4e@mail.gov',
                        phone   : '+33 332 067 9063'
                    },
                    {
                        avatar  : 'assets/images/avatars/danielle.jpg',
                        name    : 'Dorothy Morris',
                        position: 'Office Assistant',
                        office  : 'Magsaysay',
                        email   : 'dmorris4f@mail.com',
                        phone   : '+05 490 958 6120'
                    },
                    {
                        avatar  : 'assets/images/avatars/carl.jpg',
                        name    : 'Mark Gonzales',
                        position: 'Quality Control',
                        office  : 'Matsue-shi',
                        email   : 'mgonzales4g@mail.com',
                        phone   : '+03 168 394 9935'
                    },
                    {
                        avatar  : 'assets/images/avatars/profile.jpg',
                        name    : 'Catherine Rogers',
                        position: 'Programmer Analyst',
                        office  : 'Kangar',
                        email   : 'crogers4h@mail.com',
                        phone   : '+86 235 407 5373'
                    },
                    {
                        avatar  : 'assets/images/avatars/garry.jpg',
                        name    : 'Ruth Grant',
                        position: 'Community Outreach',
                        office  : 'Beaune',
                        email   : 'rgrant4i@mail.pl',
                        phone   : '+36 288 083 8460'
                    },
                    {
                        avatar  : 'assets/images/avatars/james.jpg',
                        name    : 'Phyllis Gutierrez',
                        position: 'Administrative Assistant',
                        office  : 'Shlissel’burg',
                        email   : 'pgutierrez4j@mail.net',
                        phone   : '+52 749 861 9304'
                    }, {
                        avatar  : 'assets/images/avatars/alice.jpg',
                        name    : 'Lillian Morris',
                        position: 'Media Planner',
                        office  : 'Berlin',
                        email   : 'lmorris4k@mail.de',
                        phone   : '+59 695 110 3856'
                    }, {
                        avatar  : 'assets/images/avatars/vincent.jpg',
                        name    : 'Jeremy Anderson',
                        position: 'Systems Engineer',
                        office  : 'Lũng Hồ',
                        email   : 'janderson4l@mail.uk',
                        phone   : '+40 384 115 1448'
                    },
                    {
                        avatar  : 'assets/images/avatars/carl.jpg',
                        name    : 'Arthur Lawrence',
                        position: 'Nurse Practicioner',
                        office  : 'Sarkanjut',
                        email   : 'alawrence4m@mail.com',
                        phone   : '+36 631 599 7867'
                    }, {
                        avatar  : 'assets/images/avatars/andrew.jpg',
                        name    : 'David Simmons',
                        position: 'Social Worker',
                        office  : 'Ushumun',
                        email   : 'dsimmons4n@mail.com',
                        phone   : '+01 189 681 4417'
                    }, {
                        avatar  : 'assets/images/avatars/danielle.jpg',
                        name    : 'Daniel Johnston',
                        position: 'Help Desk',
                        office  : 'São Carlos',
                        email   : 'djohnston4o@mail.gov',
                        phone   : '+60 028 943 7919'
                    },

                    {
                        avatar  : 'assets/images/avatars/joyce.jpg',
                        name    : 'Ann King',
                        position: 'Internal Auditor',
                        office  : 'Liren',
                        email   : 'aking4p@mail.com',
                        phone   : '+91 103 932 6545'
                    },
                    {
                        avatar  : 'assets/images/avatars/james.jpg',
                        name    : 'Phillip Franklin',
                        position: 'VP Accounting',
                        office  : 'Soba',
                        email   : 'pfranklin4q@mail.com',
                        phone   : '+25 820 986 7626'
                    },
                    {
                        avatar  : 'assets/images/avatars/garry.jpg',
                        name    : 'Gary Gonzalez',
                        position: 'Speech Pathologist',
                        office  : 'Gangkou',
                        email   : 'ggonzalez4r@mail.cc',
                        phone   : '+10 862 046 7916'
                    }
                ]
            }
        },
        'weatherWidget': {
            'locations'      : {
                'NewYork': {
                    'name'           : 'New York',
                    'icon'           : 'icon-rainy2',
                    'temp'           : {
                        'C': '22',
                        'F': '72'
                    },
                    'windSpeed'      : {
                        'KMH': 12,
                        'MPH': 7.5
                    },
                    'windDirection'  : 'NW',
                    'rainProbability': '98%',
                    'next3Days'      : [
                        {
                            'name': 'Sunday',
                            'icon': 'icon-rainy',
                            'temp': {
                                'C': '21',
                                'F': '70'
                            }
                        },
                        {
                            'name': 'Sunday',
                            'icon': 'icon-cloudy',
                            'temp': {
                                'C': '19',
                                'F': '66'
                            }
                        },
                        {
                            'name': 'Tuesday',
                            'icon': 'icon-windy3',
                            'temp': {
                                'C': '24',
                                'F': '75'
                            }
                        }
                    ]
                }
            },
            'currentLocation': 'NewYork',
            'tempUnit'       : 'C',
            'speedUnit'      : 'KMH'
        }
    };

    public static analyticswidgets = {
        widget1: {
            chartType: 'line',
            datasets : {
                '2016': [
                    {
                        label: 'Sales',
                        data : [1.9, 3, 3.4, 2.2, 2.9, 3.9, 2.5, 3.8, 4.1, 3.8, 3.2, 2.9],
                        fill : 'start'

                    }
                ],
                '2017': [
                    {
                        label: 'Sales',
                        data : [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9, 1.9, 3, 3.4, 4.1, 3.8],
                        fill : 'start'

                    }
                ],
                '2018': [
                    {
                        label: 'Sales',
                        data : [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8, 3.2, 2.9, 3.4, 2.2, 2.9],
                        fill : 'start'

                    }
                ]

            },
            labels   : ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            colors   : [
                {
                    borderColor              : '#42a5f5',
                    backgroundColor          : '#42a5f5',
                    pointBackgroundColor     : '#1e88e5',
                    pointHoverBackgroundColor: '#1e88e5',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top  : 32,
                        left : 32,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    },
                    line : {
                        tension: 0
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display       : false,
                                drawBorder    : false,
                                tickMarkLength: 18
                            },
                            ticks    : {
                                fontColor: '#ffffff'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min     : 1.5,
                                max     : 5,
                                stepSize: 0.5
                            }
                        }
                    ]
                },
                plugins            : {
                    filler      : {
                        propagate: false
                    },
                    xLabelsOnTop: {
                        active: true
                    }
                }
            }
        },
        widget2: {
            conversion: {
                value   : 492,
                ofTarget: 13
            },
            chartType : 'bar',
            datasets  : [
                {
                    label: 'Conversion',
                    data : [221, 428, 492, 471, 413, 344, 294]
                }
            ],
            labels    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            colors    : [
                {
                    borderColor    : '#42a5f5',
                    backgroundColor: '#42a5f5'
                }
            ],
            options   : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min: 100,
                                max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget3: {
            impressions: {
                value   : '87k',
                ofTarget: 12
            },
            chartType  : 'line',
            datasets   : [
                {
                    label: 'Impression',
                    data : [67000, 54000, 82000, 57000, 72000, 57000, 87000, 72000, 89000, 98700, 112000, 136000, 110000, 149000, 98000],
                    fill : false
                }
            ],
            labels     : ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15'],
            colors     : [
                {
                    borderColor: '#5c84f1'
                }
            ],
            options    : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                elements           : {
                    point: {
                        radius          : 2,
                        borderWidth     : 1,
                        hoverRadius     : 2,
                        hoverBorderWidth: 1
                    },
                    line : {
                        tension: 0
                    }
                },
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                // min: 100,
                                // max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget4: {
            visits   : {
                value   : 882,
                ofTarget: -9
            },
            chartType: 'bar',
            datasets : [
                {
                    label: 'Visits',
                    data : [432, 428, 327, 363, 456, 267, 231]
                }
            ],
            labels   : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            colors   : [
                {
                    borderColor    : '#f44336',
                    backgroundColor: '#f44336'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min: 150,
                                max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget5: {
            chartType: 'line',
            datasets : {
                'yesterday': [
                    {
                        label: 'Visitors',
                        data : [190, 300, 340, 220, 290, 390, 250, 380, 410, 380, 320, 290],
                        fill : 'start'

                    },
                    {
                        label: 'Page views',
                        data : [2200, 2900, 3900, 2500, 3800, 3200, 2900, 1900, 3000, 3400, 4100, 3800],
                        fill : 'start'
                    }
                ],
                'today'    : [
                    {
                        label: 'Visitors',
                        data : [410, 380, 320, 290, 190, 390, 250, 380, 300, 340, 220, 290],
                        fill : 'start'
                    },
                    {
                        label: 'Page Views',
                        data : [3000, 3400, 4100, 3800, 2200, 3200, 2900, 1900, 2900, 3900, 2500, 3800],
                        fill : 'start'

                    }
                ]
            },
            labels   : ['12am', '2am', '4am', '6am', '8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm', '10pm'],
            colors   : [
                {
                    borderColor              : '#3949ab',
                    backgroundColor          : '#3949ab',
                    pointBackgroundColor     : '#3949ab',
                    pointHoverBackgroundColor: '#3949ab',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                },
                {
                    borderColor              : 'rgba(30, 136, 229, 0.87)',
                    backgroundColor          : 'rgba(30, 136, 229, 0.87)',
                    pointBackgroundColor     : 'rgba(30, 136, 229, 0.87)',
                    pointHoverBackgroundColor: 'rgba(30, 136, 229, 0.87)',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                tooltips           : {
                    position : 'nearest',
                    mode     : 'index',
                    intersect: false
                },
                layout             : {
                    padding: {
                        left : 24,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            ticks    : {
                                fontColor: 'rgba(0,0,0,0.54)'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                tickMarkLength: 16
                            },
                            ticks    : {
                                stepSize: 1000
                            }
                        }
                    ]
                },
                plugins            : {
                    filler: {
                        propagate: false
                    }
                }
            }
        },
        widget6: {
            markers: [
                {
                    lat  : 52,
                    lng  : -73,
                    label: '120'
                },
                {
                    lat  : 37,
                    lng  : -104,
                    label: '498'
                },
                {
                    lat  : 21,
                    lng  : -7,
                    label: '443'
                },
                {
                    lat  : 55,
                    lng  : 75,
                    label: '332'
                },
                {
                    lat  : 51,
                    lng  : 7,
                    label: '50'
                },
                {
                    lat  : 31,
                    lng  : 12,
                    label: '221'
                },
                {
                    lat  : 45,
                    lng  : 44,
                    label: '455'
                },
                {
                    lat  : -26,
                    lng  : 134,
                    label: '231'
                },
                {
                    lat  : -9,
                    lng  : -60,
                    label: '67'
                },
                {
                    lat  : 33,
                    lng  : 104,
                    label: '665'
                }
            ],
            styles : [
                {
                    'featureType': 'administrative',
                    'elementType': 'labels.text.fill',
                    'stylers'    : [
                        {
                            'color': '#444444'
                        }
                    ]
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'color': '#f2f2f2'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'saturation': -100
                        },
                        {
                            'lightness': 45
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'simplified'
                        }
                    ]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'labels.icon',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'color': '#039be5'
                        },
                        {
                            'visibility': 'on'
                        }
                    ]
                }
            ]
        },
        widget7: {
            scheme : {
                domain: ['#4867d2', '#5c84f1', '#89a9f4']
            },
            devices: [
                {
                    name  : 'Desktop',
                    value : 92.8,
                    change: -0.6
                },
                {
                    name  : 'Mobile',
                    value : 6.1,
                    change: 0.7
                },
                {
                    name  : 'Tablet',
                    value : 1.1,
                    change: 0.1
                }
            ]
        },
        widget8: {
            scheme : {
                domain: ['#5c84f1']
            },
            today  : '12,540',
            change : {
                value     : 321,
                percentage: 2.05
            },
            data   : [
                {
                    name  : 'Sales',
                    series: [
                        {
                            name : 'Jan 1',
                            value: 540
                        },
                        {
                            name : 'Jan 2',
                            value: 539
                        },
                        {
                            name : 'Jan 3',
                            value: 538
                        },
                        {
                            name : 'Jan 4',
                            value: 539
                        },
                        {
                            name : 'Jan 5',
                            value: 540
                        },
                        {
                            name : 'Jan 6',
                            value: 539
                        },
                        {
                            name : 'Jan 7',
                            value: 540
                        }
                    ]
                }
            ],
            dataMin: 538,
            dataMax: 541
        },
        widget9: {
            rows: [
                {
                    title     : 'Holiday Travel',
                    clicks    : 3621,
                    conversion: 90
                },
                {
                    title     : 'Get Away Deals',
                    clicks    : 703,
                    conversion: 7
                },
                {
                    title     : 'Airfare',
                    clicks    : 532,
                    conversion: 0
                },
                {
                    title     : 'Vacation',
                    clicks    : 201,
                    conversion: 8
                },
                {
                    title     : 'Hotels',
                    clicks    : 94,
                    conversion: 4
                }
            ]
        }
    };
}
