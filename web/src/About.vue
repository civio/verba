<template>
  <div>
    <h4>About</h4>

    <p>Full documentation available at <a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-simple-query-string-query.html#simple-query-string-syntax" target="_blank">Elastic site</a>. Most important operators:</p>

    <dl class="row">
      <dt class="col-sm-1">+</dt>
      <dd class="col-sm-11">signifies AND operation</dd>

      <dt class="col-sm-1">|</dt>
      <dd class="col-sm-11">signifies OR operation</dd>

      <dt class="col-sm-1">-</dt>
      <dd class="col-sm-11">negates a single token</dd>

      <dt class="col-sm-1">"</dt>
      <dd class="col-sm-11">wraps a number of tokens to signify a phrase for searching</dd>

      <dt class="col-sm-1">*</dt>
      <dd class="col-sm-11">at the end of a term signifies a prefix query</dd>
    </dl>

    <p>By default, AND is applied to search terms, so "Obama Trump" will return results with BOTH "Obama" and "Trump" in them. If you want to find results with EITHER keyword, use "Obama | Trump"</p>
  </div>
</template>
