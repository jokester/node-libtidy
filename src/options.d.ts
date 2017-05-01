/**
* Type for libtidy options
* @generated with /util/gen-typescript-decl.ts
*/
export namespace Generated {
  interface TidyDocOption {
    /**
    * PrettyPrint / indent-spaces (integer)
    */
    optGet(key: "indent-spaces" | "indent_spaces" | "IndentSpaces"): number;
    /**
    * PrettyPrint / wrap (integer)
    */
    optGet(key: "wrap" | "Wrap"): number;
    /**
    * PrettyPrint / tab-size (integer)
    */
    optGet(key: "tab-size" | "tab_size" | "TabSize"): number;
    /**
    * Encoding / char-encoding (integer)
    */
    optGet(key: "char-encoding" | "char_encoding" | "CharEncoding"): "raw" | "ascii" | "latin0" | "latin1" | "utf8" | "iso2022" | "mac" | "win1252" | "ibm858" | "utf16le" | "utf16be" | "utf16" | "big5" | "shiftjis";
    /**
    * Encoding / input-encoding (integer)
    */
    optGet(key: "input-encoding" | "input_encoding" | "InputEncoding"): "raw" | "ascii" | "latin0" | "latin1" | "utf8" | "iso2022" | "mac" | "win1252" | "ibm858" | "utf16le" | "utf16be" | "utf16" | "big5" | "shiftjis";
    /**
    * Encoding / output-encoding (integer)
    */
    optGet(key: "output-encoding" | "output_encoding" | "OutputEncoding"): "raw" | "ascii" | "latin0" | "latin1" | "utf8" | "iso2022" | "mac" | "win1252" | "ibm858" | "utf16le" | "utf16be" | "utf16" | "big5" | "shiftjis";
    /**
    * Encoding / newline (integer)
    */
    optGet(key: "newline" | "Newline"): "LF" | "CRLF" | "CR";
    /**
    * Markup / doctype-mode (integer)
    */
    optGet(key: "doctype-mode" | "doctype_mode" | "DoctypeMode"): "html5" | "omit" | "auto" | "strict" | "transitional" | "user";
    /**
    * Markup / doctype (string)
    */
    optGet(key: "doctype" | "Doctype"): "html5" | "omit" | "auto" | "strict" | "transitional" | "user";
    /**
    * Markup / repeated-attributes (integer)
    */
    optGet(key: "repeated-attributes" | "repeated_attributes" | "RepeatedAttributes"): "keep-first" | "keep-last";
    /**
    * Markup / alt-text (string)
    */
    optGet(key: "alt-text" | "alt_text" | "AltText"): string;
    /**
    * Miscellaneous / slide-style (string)
    */
    optGet(key: "slide-style" | "slide_style" | "SlideStyle"): string;
    /**
    * Miscellaneous / error-file (string)
    */
    optGet(key: "error-file" | "error_file" | "ErrorFile"): string;
    /**
    * Miscellaneous / output-file (string)
    */
    optGet(key: "output-file" | "output_file" | "OutputFile"): string;
    /**
    * Miscellaneous / write-back (boolean)
    */
    optGet(key: "write-back" | "write_back" | "WriteBack"): boolean;
    /**
    * PrettyPrint / markup (boolean)
    */
    optGet(key: "markup" | "Markup"): boolean;
    /**
    * Diagnostics / show-info (boolean)
    */
    optGet(key: "show-info" | "show_info" | "ShowInfo"): boolean;
    /**
    * Diagnostics / show-warnings (boolean)
    */
    optGet(key: "show-warnings" | "show_warnings" | "ShowWarnings"): boolean;
    /**
    * Miscellaneous / quiet (boolean)
    */
    optGet(key: "quiet" | "Quiet"): boolean;
    /**
    * PrettyPrint / indent (integer)
    */
    optGet(key: "indent" | "Indent"): "no" | "yes" | "auto";
    /**
    * Markup / coerce-endtags (boolean)
    */
    optGet(key: "coerce-endtags" | "coerce_endtags" | "CoerceEndtags"): boolean;
    /**
    * Markup / omit-optional-tags (boolean)
    */
    optGet(key: "omit-optional-tags" | "omit_optional_tags" | "OmitOptionalTags"): boolean;
    /**
    * Markup / hide-endtags (boolean)
    */
    optGet(key: "hide-endtags" | "hide_endtags" | "HideEndtags"): boolean;
    /**
    * Markup / input-xml (boolean)
    */
    optGet(key: "input-xml" | "input_xml" | "InputXml"): boolean;
    /**
    * Markup / output-xml (boolean)
    */
    optGet(key: "output-xml" | "output_xml" | "OutputXml"): boolean;
    /**
    * Markup / output-xhtml (boolean)
    */
    optGet(key: "output-xhtml" | "output_xhtml" | "OutputXhtml"): boolean;
    /**
    * Markup / output-html (boolean)
    */
    optGet(key: "output-html" | "output_html" | "OutputHtml"): boolean;
    /**
    * Markup / add-xml-decl (boolean)
    */
    optGet(key: "add-xml-decl" | "add_xml_decl" | "AddXmlDecl"): boolean;
    /**
    * Markup / uppercase-tags (boolean)
    */
    optGet(key: "uppercase-tags" | "uppercase_tags" | "UppercaseTags"): boolean;
    /**
    * Markup / uppercase-attributes (boolean)
    */
    optGet(key: "uppercase-attributes" | "uppercase_attributes" | "UppercaseAttributes"): boolean;
    /**
    * Markup / bare (boolean)
    */
    optGet(key: "bare" | "Bare"): boolean;
    /**
    * Markup / clean (boolean)
    */
    optGet(key: "clean" | "Clean"): boolean;
    /**
    * Markup / gdoc (boolean)
    */
    optGet(key: "gdoc" | "Gdoc"): boolean;
    /**
    * Markup / logical-emphasis (boolean)
    */
    optGet(key: "logical-emphasis" | "logical_emphasis" | "LogicalEmphasis"): boolean;
    /**
    * Markup / drop-proprietary-attributes (boolean)
    */
    optGet(key: "drop-proprietary-attributes" | "drop_proprietary_attributes" | "DropProprietaryAttributes"): boolean;
    /**
    * Markup / drop-font-tags (boolean)
    */
    optGet(key: "drop-font-tags" | "drop_font_tags" | "DropFontTags"): boolean;
    /**
    * Markup / drop-empty-elements (boolean)
    */
    optGet(key: "drop-empty-elements" | "drop_empty_elements" | "DropEmptyElements"): boolean;
    /**
    * Markup / drop-empty-paras (boolean)
    */
    optGet(key: "drop-empty-paras" | "drop_empty_paras" | "DropEmptyParas"): boolean;
    /**
    * Markup / fix-bad-comments (boolean)
    */
    optGet(key: "fix-bad-comments" | "fix_bad_comments" | "FixBadComments"): boolean;
    /**
    * PrettyPrint / break-before-br (boolean)
    */
    optGet(key: "break-before-br" | "break_before_br" | "BreakBeforeBr"): boolean;
    /**
    * PrettyPrint / split (boolean)
    */
    optGet(key: "split" | "Split"): boolean;
    /**
    * Markup / numeric-entities (boolean)
    */
    optGet(key: "numeric-entities" | "numeric_entities" | "NumericEntities"): boolean;
    /**
    * Markup / quote-marks (boolean)
    */
    optGet(key: "quote-marks" | "quote_marks" | "QuoteMarks"): boolean;
    /**
    * Markup / quote-nbsp (boolean)
    */
    optGet(key: "quote-nbsp" | "quote_nbsp" | "QuoteNbsp"): boolean;
    /**
    * Markup / quote-ampersand (boolean)
    */
    optGet(key: "quote-ampersand" | "quote_ampersand" | "QuoteAmpersand"): boolean;
    /**
    * PrettyPrint / wrap-attributes (boolean)
    */
    optGet(key: "wrap-attributes" | "wrap_attributes" | "WrapAttributes"): boolean;
    /**
    * PrettyPrint / wrap-script-literals (boolean)
    */
    optGet(key: "wrap-script-literals" | "wrap_script_literals" | "WrapScriptLiterals"): boolean;
    /**
    * PrettyPrint / wrap-sections (boolean)
    */
    optGet(key: "wrap-sections" | "wrap_sections" | "WrapSections"): boolean;
    /**
    * PrettyPrint / wrap-asp (boolean)
    */
    optGet(key: "wrap-asp" | "wrap_asp" | "WrapAsp"): boolean;
    /**
    * PrettyPrint / wrap-jste (boolean)
    */
    optGet(key: "wrap-jste" | "wrap_jste" | "WrapJste"): boolean;
    /**
    * PrettyPrint / wrap-php (boolean)
    */
    optGet(key: "wrap-php" | "wrap_php" | "WrapPhp"): boolean;
    /**
    * Markup / fix-backslash (boolean)
    */
    optGet(key: "fix-backslash" | "fix_backslash" | "FixBackslash"): boolean;
    /**
    * PrettyPrint / indent-attributes (boolean)
    */
    optGet(key: "indent-attributes" | "indent_attributes" | "IndentAttributes"): boolean;
    /**
    * Markup / assume-xml-procins (boolean)
    */
    optGet(key: "assume-xml-procins" | "assume_xml_procins" | "AssumeXmlProcins"): boolean;
    /**
    * Markup / add-xml-space (boolean)
    */
    optGet(key: "add-xml-space" | "add_xml_space" | "AddXmlSpace"): boolean;
    /**
    * Markup / enclose-text (boolean)
    */
    optGet(key: "enclose-text" | "enclose_text" | "EncloseText"): boolean;
    /**
    * Markup / enclose-block-text (boolean)
    */
    optGet(key: "enclose-block-text" | "enclose_block_text" | "EncloseBlockText"): boolean;
    /**
    * Miscellaneous / keep-time (boolean)
    */
    optGet(key: "keep-time" | "keep_time" | "KeepTime"): boolean;
    /**
    * Markup / word-2000 (boolean)
    */
    optGet(key: "word-2000" | "word_2000" | "Word2000"): boolean;
    /**
    * Miscellaneous / tidy-mark (boolean)
    */
    optGet(key: "tidy-mark" | "tidy_mark" | "TidyMark"): boolean;
    /**
    * Miscellaneous / gnu-emacs (boolean)
    */
    optGet(key: "gnu-emacs" | "gnu_emacs" | "GnuEmacs"): boolean;
    /**
    * Miscellaneous / gnu-emacs-file (string)
    */
    optGet(key: "gnu-emacs-file" | "gnu_emacs_file" | "GnuEmacsFile"): string;
    /**
    * Markup / literal-attributes (boolean)
    */
    optGet(key: "literal-attributes" | "literal_attributes" | "LiteralAttributes"): boolean;
    /**
    * Markup / show-body-only (integer)
    */
    optGet(key: "show-body-only" | "show_body_only" | "ShowBodyOnly"): "no" | "yes" | "auto";
    /**
    * Markup / fix-uri (boolean)
    */
    optGet(key: "fix-uri" | "fix_uri" | "FixUri"): boolean;
    /**
    * Markup / lower-literals (boolean)
    */
    optGet(key: "lower-literals" | "lower_literals" | "LowerLiterals"): boolean;
    /**
    * Markup / hide-comments (boolean)
    */
    optGet(key: "hide-comments" | "hide_comments" | "HideComments"): boolean;
    /**
    * Markup / indent-cdata (boolean)
    */
    optGet(key: "indent-cdata" | "indent_cdata" | "IndentCdata"): boolean;
    /**
    * Miscellaneous / force-output (boolean)
    */
    optGet(key: "force-output" | "force_output" | "ForceOutput"): boolean;
    /**
    * Diagnostics / show-errors (integer)
    */
    optGet(key: "show-errors" | "show_errors" | "ShowErrors"): number;
    /**
    * Encoding / ascii-chars (boolean)
    */
    optGet(key: "ascii-chars" | "ascii_chars" | "AsciiChars"): boolean;
    /**
    * Markup / join-classes (boolean)
    */
    optGet(key: "join-classes" | "join_classes" | "JoinClasses"): boolean;
    /**
    * Markup / join-styles (boolean)
    */
    optGet(key: "join-styles" | "join_styles" | "JoinStyles"): boolean;
    /**
    * Markup / escape-cdata (boolean)
    */
    optGet(key: "escape-cdata" | "escape_cdata" | "EscapeCdata"): boolean;
    /**
    * Encoding / language (string)
    */
    optGet(key: "language" | "Language"): string;
    /**
    * Markup / ncr (boolean)
    */
    optGet(key: "ncr" | "Ncr"): boolean;
    /**
    * Encoding / output-bom (integer)
    */
    optGet(key: "output-bom" | "output_bom" | "OutputBom"): "no" | "yes" | "auto";
    /**
    * Markup / replace-color (boolean)
    */
    optGet(key: "replace-color" | "replace_color" | "ReplaceColor"): boolean;
    /**
    * Markup / css-prefix (string)
    */
    optGet(key: "css-prefix" | "css_prefix" | "CssPrefix"): string;
    /**
    * Markup / new-inline-tags (string)
    */
    optGet(key: "new-inline-tags" | "new_inline_tags" | "NewInlineTags"): string;
    /**
    * Markup / new-blocklevel-tags (string)
    */
    optGet(key: "new-blocklevel-tags" | "new_blocklevel_tags" | "NewBlocklevelTags"): string;
    /**
    * Markup / new-empty-tags (string)
    */
    optGet(key: "new-empty-tags" | "new_empty_tags" | "NewEmptyTags"): string;
    /**
    * Markup / new-pre-tags (string)
    */
    optGet(key: "new-pre-tags" | "new_pre_tags" | "NewPreTags"): string;
    /**
    * Diagnostics / accessibility-check (integer)
    */
    optGet(key: "accessibility-check" | "accessibility_check" | "AccessibilityCheck"): "0 (Tidy Classic)" | "1 (Priority 1 Checks)" | "2 (Priority 2 Checks)" | "3 (Priority 3 Checks)";
    /**
    * PrettyPrint / vertical-space (integer)
    */
    optGet(key: "vertical-space" | "vertical_space" | "VerticalSpace"): "no" | "yes" | "auto";
    /**
    * PrettyPrint / punctuation-wrap (boolean)
    */
    optGet(key: "punctuation-wrap" | "punctuation_wrap" | "PunctuationWrap"): boolean;
    /**
    * Markup / merge-emphasis (boolean)
    */
    optGet(key: "merge-emphasis" | "merge_emphasis" | "MergeEmphasis"): boolean;
    /**
    * Markup / merge-divs (integer)
    */
    optGet(key: "merge-divs" | "merge_divs" | "MergeDivs"): "no" | "yes" | "auto";
    /**
    * Markup / decorate-inferred-ul (boolean)
    */
    optGet(key: "decorate-inferred-ul" | "decorate_inferred_ul" | "DecorateInferredUl"): boolean;
    /**
    * Markup / preserve-entities (boolean)
    */
    optGet(key: "preserve-entities" | "preserve_entities" | "PreserveEntities"): boolean;
    /**
    * PrettyPrint / sort-attributes (integer)
    */
    optGet(key: "sort-attributes" | "sort_attributes" | "SortAttributes"): "none" | "alpha";
    /**
    * Markup / merge-spans (integer)
    */
    optGet(key: "merge-spans" | "merge_spans" | "MergeSpans"): "no" | "yes" | "auto";
    /**
    * Markup / anchor-as-name (boolean)
    */
    optGet(key: "anchor-as-name" | "anchor_as_name" | "AnchorAsName"): boolean;
    /**
    * PrettyPrint / indent-with-tabs (boolean)
    */
    optGet(key: "indent-with-tabs" | "indent_with_tabs" | "IndentWithTabs"): boolean;
    /**
    * Markup / skip-nested (boolean)
    */
    optGet(key: "skip-nested" | "skip_nested" | "SkipNested"): boolean;
    /**
    * Markup / strict-tags-attributes (boolean)
    */
    optGet(key: "strict-tags-attributes" | "strict_tags_attributes" | "StrictTagsAttributes"): boolean;
    /**
    * PrettyPrint / escape-scripts (boolean)
    */
    optGet(key: "escape-scripts" | "escape_scripts" | "EscapeScripts"): boolean;
  }

  /**
  * NOTE: some values will not be returned from getter.
  * TypeScript does not allow us to distinguish setter and getter in declaration.
  */
  interface OptionDict {
    indent_spaces?: number;
    wrap?: number;
    tab_size?: number;
    char_encoding?: "raw" | 0 | "ascii" | 1 | "latin0" | 2 | "latin1" | 3 | "utf8" | 4 | "iso2022" | 5 | "mac" | 6 | "win1252" | 7 | "ibm858" | 8 | "utf16le" | 9 | "utf16be" | 10 | "utf16" | 11 | "big5" | 12 | "shiftjis" | 13;
    input_encoding?: "raw" | 0 | "ascii" | 1 | "latin0" | 2 | "latin1" | 3 | "utf8" | 4 | "iso2022" | 5 | "mac" | 6 | "win1252" | 7 | "ibm858" | 8 | "utf16le" | 9 | "utf16be" | 10 | "utf16" | 11 | "big5" | 12 | "shiftjis" | 13;
    output_encoding?: "raw" | 0 | "ascii" | 1 | "latin0" | 2 | "latin1" | 3 | "utf8" | 4 | "iso2022" | 5 | "mac" | 6 | "win1252" | 7 | "ibm858" | 8 | "utf16le" | 9 | "utf16be" | 10 | "utf16" | 11 | "big5" | 12 | "shiftjis" | 13;
    newline?: "LF" | 0 | "CRLF" | 1 | "CR" | 2;
    doctype_mode?: "html5" | 0 | "omit" | 1 | "auto" | 2 | "strict" | 3 | "transitional" | 4 | "user" | 5;
    doctype?: "html5" | "omit" | "auto" | "strict" | "transitional" | "user";
    repeated_attributes?: "keep-first" | 0 | "keep-last" | 1;
    alt_text?: string;
    slide_style?: string;
    error_file?: string;
    output_file?: string;
    write_back?: boolean;
    markup?: boolean;
    show_info?: boolean;
    show_warnings?: boolean;
    quiet?: boolean;
    indent?: "no" | 0 | "yes" | 1 | "auto" | 2;
    coerce_endtags?: boolean;
    omit_optional_tags?: boolean;
    hide_endtags?: boolean;
    input_xml?: boolean;
    output_xml?: boolean;
    output_xhtml?: boolean;
    output_html?: boolean;
    add_xml_decl?: boolean;
    uppercase_tags?: boolean;
    uppercase_attributes?: boolean;
    bare?: boolean;
    clean?: boolean;
    gdoc?: boolean;
    logical_emphasis?: boolean;
    drop_proprietary_attributes?: boolean;
    drop_font_tags?: boolean;
    drop_empty_elements?: boolean;
    drop_empty_paras?: boolean;
    fix_bad_comments?: boolean;
    break_before_br?: boolean;
    split?: boolean;
    numeric_entities?: boolean;
    quote_marks?: boolean;
    quote_nbsp?: boolean;
    quote_ampersand?: boolean;
    wrap_attributes?: boolean;
    wrap_script_literals?: boolean;
    wrap_sections?: boolean;
    wrap_asp?: boolean;
    wrap_jste?: boolean;
    wrap_php?: boolean;
    fix_backslash?: boolean;
    indent_attributes?: boolean;
    assume_xml_procins?: boolean;
    add_xml_space?: boolean;
    enclose_text?: boolean;
    enclose_block_text?: boolean;
    keep_time?: boolean;
    word_2000?: boolean;
    tidy_mark?: boolean;
    gnu_emacs?: boolean;
    gnu_emacs_file?: string;
    literal_attributes?: boolean;
    show_body_only?: "no" | 0 | "yes" | 1 | "auto" | 2;
    fix_uri?: boolean;
    lower_literals?: boolean;
    hide_comments?: boolean;
    indent_cdata?: boolean;
    force_output?: boolean;
    show_errors?: number;
    ascii_chars?: boolean;
    join_classes?: boolean;
    join_styles?: boolean;
    escape_cdata?: boolean;
    language?: string;
    ncr?: boolean;
    output_bom?: "no" | 0 | "yes" | 1 | "auto" | 2;
    replace_color?: boolean;
    css_prefix?: string;
    new_inline_tags?: string;
    new_blocklevel_tags?: string;
    new_empty_tags?: string;
    new_pre_tags?: string;
    accessibility_check?: "0 (Tidy Classic)" | 0 | "1 (Priority 1 Checks)" | 1 | "2 (Priority 2 Checks)" | 2 | "3 (Priority 3 Checks)" | 3;
    vertical_space?: "no" | 0 | "yes" | 1 | "auto" | 2;
    punctuation_wrap?: boolean;
    merge_emphasis?: boolean;
    merge_divs?: "no" | 0 | "yes" | 1 | "auto" | 2;
    decorate_inferred_ul?: boolean;
    preserve_entities?: boolean;
    sort_attributes?: "none" | 0 | "alpha" | 1;
    merge_spans?: "no" | 0 | "yes" | 1 | "auto" | 2;
    anchor_as_name?: boolean;
    indent_with_tabs?: boolean;
    skip_nested?: boolean;
    strict_tags_attributes?: boolean;
    escape_scripts?: boolean;
  }

}

