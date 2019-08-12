const lodash = require('lodash');

const spaceFactor = 8;

module.exports = {
  title: 'Cod-UI Styleguide',
  usageMode: 'expand',
  pagePerSection: true,
  updateDocs: docs => {
    // Also contains (doc,file);
    // Hide irrelevant props
    lodash.remove(docs.props, { name: 'classes' });
    lodash.remove(docs.props, { name: 't' });
    return docs;
  },
  sections: [
    {
      name: 'Component Demos',
      description: '---',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
      sectionDepth: 1,
      sections: [
        {
          name: 'ButtonList',
          content: 'src/__docs__/ButtonList.md',
        },
        {
          name: 'Checkbox',
          content: 'src/__docs__/Checkbox.md',
        },
        {
          name: 'FlexHeader',
          content: 'src/__docs__/FlexHeader.md',
        },
        {
          name: 'Link',
          content: 'src/__docs__/Link.md',
        },
        {
          name: 'ListItemDetail',
          content: 'src/__docs__/ListItemDetail.md',
        },
        {
          name: 'Loader',
          content: 'src/__docs__/Loader.md',
        },
        {
          name: 'Logo',
          content: 'src/__docs__/Logo.md',
        },
        {
          name: 'Notifications',
          content: 'src/__docs__/Notifications.md',
        },
        {
          name: 'PageWrapper',
          content: 'src/__docs__/PageWrapper.md',
        },
        {
          name: 'PopupFormButton',
          content: 'src/__docs__/PopupFormButton.md',
        },
        {
          name: 'PrimaryNavigation',
          content: 'src/__docs__/PrimaryNavigation.md',
        },
        {
          name: 'SectionTitle',
          content: 'src/__docs__/SectionTitle.md',
        },
        {
          name: 'Select',
          content: 'src/__docs__/Select.md',
        },
        {
          name: 'SubTitle',
          content: 'src/__docs__/SubTitle.md',
        },
        {
          name: 'Table',
          content: 'src/__docs__/Table.md',
        },
        {
          name: 'TableCell',
          content: 'src/__docs__/TableCell.md',
        },
        {
          name: 'TextField',
          content: 'src/__docs__/TextField.md',
        },
        {
          name: 'WorkflowStatus',
          content: 'src/__docs__/WorkflowStatus.md',
        },
        {
          name: 'WorkflowStatusItem',
          content: 'src/__docs__/WorkflowStatusItem.md',
        },
      ],
    },
    {
      name: 'Component API',
      components: 'src/**/[A-Z]*.js',
      description: '---',
      exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
      usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
  ],
  theme: {
    fontFamily: {
      fontFamily: '"Helvetica"',
    },
    color: {
      link: 'rgba(46, 46, 56, .75)',
      linkHover: 'rgba(46, 46, 56, 1)',
    },
    space: [
      spaceFactor / 2,
      spaceFactor,
      spaceFactor * 2,
      spaceFactor * 3,
      spaceFactor * 4,
      spaceFactor * 5,
      spaceFactor * 6,
    ],
  },
  styles: {
    Argument: {
      block: {},
    },
    Arguments: {
      root: {},
      headingWrapper: {},
    },
    Code: {
      code: {
        padding: '.2rem .5rem',
        background: 'rgba(0, 242, 255, 0.1)',
        border: '1px solid #00118029',
        color: 'black',
        fontWeight: 'bold',
        borderRadius: '.2rem',
        margin: '0 .2rem',
        fontSize: '.8rem',
      },
    },
    ComponentsList: {
      list: {},
      item: {},
      isChild: {},
      heading: {},
      isSelected: {},
    },
    Editor: {
      root: {},
    },
    Error: {
      root: {},
      stack: {},
      message: {},
    },
    ExamplePlaceholder: {
      button: {
        display: 'none',
      },
    },
    Examples: {
      root: {
        padding: '2rem',
        borderTop: '1px solid #eee',
        marginop: '3rem',
      },
    },
    Heading: {
      heading: {
        marginTop: '5rem',
      },
      heading1: {},
      heading2: {},
      heading3: {},
      heading4: {},
      heading5: {},
      heading6: {
        fontSize: '16px',
        fontStyle: 'italic',
        borderBottom: '2px dotted silver',
        fontWeight: 'bold',
        padding: '0 0 1rem',
      },
    },
    Link: {
      link: {},
    },
    Logo: {
      logo: {
        color: 'rgba(45,45,56,1)',
        fontWeight: 'bold',
      },
    },
    Message: {
      root: {},
    },
    Name: {
      name: {},
      isDeprecated: {},
    },
    NotFound: {
      root: {},
    },
    Para: {
      para: {},
    },
    Pathline: {
      pathline: {},
      copyButton: {},
    },
    Playground: {
      root: {
        marginBottom: '32px',
        padding: '1rem',
      },
      preview: {
        marginBottom: '2rem',
      },
      controls: {
        marginBottom: 0,
      },
      toolbar: {},
      tab: {},
    },
    PlaygroundError: {
      root: {},
    },
    ReactComponent: {
      root: {
        padding: '1rem',
        boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, 0.13)',
      },
      header: {
        paddingBottom: '1rem',
        marginBottom: '1rem',
        borderBottom: '1px solid #eee',
      },
      tabs: {
        paddingLeft: '2rem',
        paddingRight: '2rem',
      },
      tabButtons: {
        marginBottom: '-1px',
      },
      tabBody: {
        '&>div': {
          padding: '1rem',
          '&:empty': {
            padding: '0',
          },
        },
        '& table': {
          marginBottom: '0',
        },
      },
      docs: {
        paddingLeft: '2rem',
      },
    },
    Ribbon: {
      root: {},
      link: {},
    },
    Section: {
      root: {},
    },
    SectionHeading: {
      wrapper: {},
      toolbar: {},
      sectionName: {},
      isDeprecated: {},
    },
    Sections: {
      root: {},
    },
    StyleGuide: {
      root: {},
      hasSidebar: {},
      content: {},
      sidebar: {},
      logo: {
        border: 'none',
      },
      footer: {
        opacity: '.5',
      },
    },
    TabButton: {
      button: {
        color: 'black',
        fontFamily: '"Helvetica"',
        padding: '8px',
        textTransform: 'uppercase',
        fontSize: '.8rem',
        borderBottom: '1px solid transparent',
        opacity: '.2',
        '&:hover, &:active, &:focus': {
          color: 'black',
          fontFamily: '"Helvetica"',
          padding: '8px',
          textTransform: 'uppercase',
          fontSize: '.8rem',
          borderBottom: '1px solid transparent',
          opacity: '.8',
        },
      },
      isActive: {
        color: 'black',
        borderBottom: '1px solid orange',
        '&:hover, &:active, &:focus': {
          color: 'black',
          borderBottom: '1px solid orange',
        },
      },
    },
    TableOfContents: {
      root: {},
      search: {},
      input: {},
    },
    Text: {
      text: {},
      inheritSize: {},
      smallSize: {},
      baseSize: {},
      textSize: {},
      baseColor: {},
      lightColor: {},
      em: {},
      strong: {},
      isUnderlined: {},
    },
    ToolbarButton: {
      button: {},
      isSmall: {},
    },
    Type: {
      type: {},
    },
    Version: {
      version: {},
    },
    Welcome: {
      root: {},
    },
    Blockquote: {
      blockquote: {},
    },
    Checkbox: {
      input: {},
    },
    Details: {
      details: {},
    },
    DetailsSummary: {
      summary: {},
    },
    Hr: {
      hr: {
        marginTop: '3rem',
        marginBottom: '3rem',
      },
    },
    List: {
      list: {},
      ordered: {},
      li: {},
    },
    MarkdownHeading: {
      spacing: {},
    },
    Pre: {
      pre: {},
    },
    Table: {
      table: {},
      tableHead: {},
      cellHeading: {},
      cell: {},
    },
    TableCell: {
      td: {},
      th: {},
    },
  },
  webpackConfig: {
    module: {
      rules: [
        // Babel loader, will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
};
