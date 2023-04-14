import json
import yaml
import sys

with open(sys.argv[1]) as f:
    data_dict = json.load(f)


def format_code(data, code_sections):
    if isinstance(data, (str, type(None))):
        return data
    if isinstance(data, list):
        return [format_code(item, code_sections) for item in data]
    for key, value in data.items():
        if key in code_sections:
            data[key] = '\n'.join(['' if item == '&nbsp;' else item for item in value])
        else:
            data[key] = format_code(data[key], code_sections)
    return data

def str_presenter(dumper, data):
  if len(data.splitlines()) > 1:  # check for multiline string
    return dumper.represent_scalar('tag:yaml.org,2002:str', data, style='|')
  return dumper.represent_scalar('tag:yaml.org,2002:str', data)

yaml.add_representer(str, str_presenter)
# yaml.representer.SafeRepresenter.add_representer(str, str_presenter)

new_data_dict = format_code(data_dict, ['installation', 'fullCode'])

with open('.'.join(sys.argv[1].split('.')[:-1]+['yaml']), 'w') as file:
    yaml.dump(new_data_dict, file)
