import json
import yaml

class Parser:
    def parse(self, content: str, spec_type: str):
        """
        Parses the input content based on the spec_type and returns a normalized JSON representation.
        """
        if spec_type.lower() == "openapi":
            return self._parse_openapi(content)
        elif spec_type.lower() == "graphql":
            return self._parse_graphql(content)
        else:
            # Fallback or generic parser
            return {"raw": content, "type": spec_type}

    def _parse_openapi(self, content: str):
        try:
            # Try parsing as JSON first
            return json.loads(content)
        except json.JSONDecodeError:
            # Try parsing as YAML
            try:
                return yaml.safe_load(content)
            except yaml.YAMLError:
                raise ValueError("Invalid OpenAPI format. Must be JSON or YAML.")

    def _parse_graphql(self, content: str):
        # Basic GraphQL parsing logic (placeholder)
        return {"type": "graphql", "schema": content}

parser = Parser()
